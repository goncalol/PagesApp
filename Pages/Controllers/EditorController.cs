using ImageSharp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pages.Models;
using System;
using System.IO;
using System.Text.RegularExpressions;

namespace Pages.Controllers
{
    [Authorize]
    public class EditorController : Controller
    {
        private UserManager<ApplicationUser> _userManager;

        //class constructor
        public EditorController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            var id = _userManager.GetUserId(User);

            var existFolder = Directory.Exists(string.Format("UserEditorDescriptors/{0}", id));
            if (!existFolder)
            {
                ViewBag.HasContent = false;
                return View();
            }
            ViewBag.HasContent = true;
            RootData[] parsedData;
            var files = Directory.GetFiles(string.Format("UserEditorDescriptors/{0}", id), "file.txt");

            using (StreamReader re = System.IO.File.OpenText(files[0]))
            {
                JsonTextReader reader = new JsonTextReader(re);
                JsonSerializer se = new JsonSerializer();
                parsedData = se.Deserialize<RootData[]>(reader);
            }

            return View(parsedData);
        }

        public IActionResult Public(string id)
        {
            if (id == null)
            {
                ViewBag.error = "id must not be null";
                return View();
            }

            RootData[] parsedData;
            var dir = Directory.CreateDirectory(string.Format("UserEditorDescriptors/{0}", id));
            var filename = dir.FullName + "\\file.txt";

            using (StreamReader re = System.IO.File.OpenText(filename))
            {
                JsonTextReader reader = new JsonTextReader(re);
                JsonSerializer se = new JsonSerializer();
                parsedData = se.Deserialize<RootData[]>(reader);
            }

            return View(parsedData);
        }

        [HttpPost]
        public JsonResult Submit([FromBody] RootData[] result)
        {
            var id = _userManager.GetUserId(User);

            var dir = System.IO.Directory.CreateDirectory(string.Format("UserEditorDescriptors/{0}", id));
            var filename = dir.FullName + "\\file.txt";

            using (StreamWriter file = System.IO.File.CreateText(filename))// @"C:\Users\Gonca\Desktop\file.txt"))
            {
                JsonSerializer serializer = new JsonSerializer();
                //serialize object directly into file stream
                serializer.Serialize(file, result);
            }

            return Json(new { Success = true });
        }

        [HttpPost]
        public JsonResult SubmitImage([FromBody] dynamic result)
        {
            try
            {
                var id = _userManager.GetUserId(User);
                var imgName = result.imgName;

                string a = result.img;//testar se vem img no result...
                byte[] imageBytes = Convert.FromBase64String(Regex.Replace(a, @"^data:image\/[a-zA-Z]+;base64,", string.Empty));

                using (var ms = new MemoryStream(imageBytes, 0, imageBytes.Length))
                {
                    Image image = new Image(ms);

                    var dir = Directory.CreateDirectory(string.Format("wwwroot/images/{0}", id));
                    using (var f = new FileStream(dir.FullName + "/" + imgName+".jpg", FileMode.OpenOrCreate))
                    {
                        image.SaveAsJpeg(f);
                    }
                }
                return Json(new { Success = true , result=string.Format("images/{0}/{1}.jpg", id,imgName) });
            }
            catch (Exception ex)
            {
                return Json(new { Success = false });
            }
        }
    }
}
