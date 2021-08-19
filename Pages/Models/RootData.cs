using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pages.Models
{
    public class RootData
    {
        [JsonProperty("Rectangle", NullValueHandling = NullValueHandling.Ignore)]
        public RectangleData Rectangle { get; set; }//if circle already set -> enviar erro q nao pode existir dois shapes num

        [JsonProperty("Circle", NullValueHandling = NullValueHandling.Ignore)]
        public CircleData Circle { get; set; }

        [JsonProperty("Image", NullValueHandling = NullValueHandling.Ignore)]
        public ImageData Image { get; set; }

        [JsonProperty("Group", NullValueHandling = NullValueHandling.Ignore)]
        public GroupData Group { get; set; }
    }

    public class RectangleData
    {
        public int left { get; set; }

        public int top { get; set; }

        public string fill { get; set; }

        public float strokeWidth { get; set; }

        public string stroke { get; set; }

        public int width { get; set; }

        public int height { get; set; }

        public float scaleX { get; set; }

        public float scaleY { get; set; }

        public bool friendList { get; set; }
        
        [JsonProperty("friends", NullValueHandling = NullValueHandling.Ignore)]
        public Friend[] friends { get; set; }
    }

    public class Friend
    {
        public string name { get; set; }

        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public string id { get; set; }
    }

    public class CircleData
    {
        public int radius { get; set; }

        public int left { get; set; }

        public int top { get; set; }

        public string fill { get; set; }

        public int strokeWidth { get; set; }

        public int stroke { get; set; }
    }

    public class ImageData
    {
        public int left { get; set; }

        public int top { get; set; }

        public int width { get; set; }

        public int height { get; set; }

        public float scaleX { get; set; }

        public float scaleY { get; set; }

        public string link { get; set; }
    }

    public class TextData
    {
        public int left { get; set; }

        public int top { get; set; }

        public int width { get; set; }

        public int height { get; set; }

        public float scaleX { get; set; }

        public float scaleY { get; set; }

        public string text { get; set; }
    }

    public class GroupData
    {
        public int left { get; set; }

        public int top { get; set; }

        public float scaleX { get; set; }

        public float scaleY { get; set; }

        public Group[] Child { get; set; }
    }

    public class Group
    {
        [JsonProperty("Rectangle", NullValueHandling = NullValueHandling.Ignore)]
        public RectangleData Rectangle { get; set; }//if circle already set -> enviar erro q nao pode existir dois shapes num

        [JsonProperty("Circle", NullValueHandling = NullValueHandling.Ignore)]
        public CircleData Circle { get; set; }

        [JsonProperty("Image", NullValueHandling = NullValueHandling.Ignore)]
        public ImageData Image { get; set; }

        [JsonProperty("Text", NullValueHandling = NullValueHandling.Ignore)]
        public TextData Text { get; set; }
    }
}
