"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Shapes/Rectangle");
var Circle_1 = require("./Shapes/Circle");
var Image_1 = require("./Shapes/Image");
var Line_1 = require("./Shapes/Line");
var Text_1 = require("./Shapes/Text");
var Group_1 = require("./Shapes/Group");
var fabric_1 = require("fabric");
var Factory_1 = require("../app/Factory");
var MyTree_1 = require("./components/MyTree");
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var Main = (function () {
    function Main() {
    }
    return Main;
}());
exports.Main = Main;
//var m = new Main();
//m.sayHello();
var currCanvas = document.getElementById('myCanvas');
var currCtx = currCanvas.getContext('2d');
var viewportWidth = currCanvas.parentElement.clientWidth;
var viewportHeight = window.innerHeight;
currCanvas.style.position = "fixed";
currCanvas.setAttribute("width", "" + viewportWidth);
currCanvas.setAttribute("height", "" + viewportHeight);
//currCanvas.style.top = 0;
var canvas = new fabric_1.fabric.Canvas('myCanvas');
if ($("#hiddenDiv").length != 0) {
    var content = JSON.parse($("#hiddenDiv").text());
    var factory = Factory_1.Factory.Create(content, canvas, true);
}
$("#rectangleBtn").click(function () {
    var rect = new Rectangle_1.Rectangle(canvas);
    canvas.add(rect.getFabricShape());
});
$("#circleBtn").click(function () {
    var circle = new Circle_1.Circle(canvas, null, null);
    canvas.add(circle.getFabricShape());
});
$("#lineBtn").click(function () {
    var line = new Line_1.Line(canvas);
    canvas.add(line.getFabricShape());
});
$("#textBtn").click(function () {
    var text = new Text_1.Text(canvas, null, null);
    canvas.add(text.getFabricShape());
});
$("#imageBtn").click(function () {
    var img = new Image_1.Image(canvas, null, null);
    canvas.add(img.getFabricShape());
});
canvas.on('object:selected', function (e) {
    if (e.target._objects !== undefined && e.target.id === undefined) {
        return; //dont want to present options on sidebar
    }
    e.target.Shape.presentOptions("rightSideBar");
});
canvas.on({
    'object:scaling': function (e) {
        var obj = e.target;
        if (e.target.type === "group")
            return;
        if (obj.Shape.strokeWidthRect) {
            var newStrokeWidth = obj.Shape.strokeWidthRect / ((obj.scaleX + obj.scaleY) / 2);
            obj.set('strokeWidth', newStrokeWidth);
        }
    }
});
$("#saveBtn").click(function () {
    var result = [];
    var allObjs = canvas.getObjects();
    allObjs.forEach(function (elem) {
        result.push(elem.Shape.Save());
    });
    var postMessage = JSON.stringify(result);
    $.ajax({
        url: $("#submitId").text(),
        data: postMessage,
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            if (data.success) {
                alert("Success");
                location.href = "http://localhost:53793/Editor/Public";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
    //console.log(XML)
});
var child = [];
ReactDOM.render(React.createElement(MyTree_1.MyTree, { nome: "Group Layer", children: child, canvasObj: null, selected: null }), document.getElementById("treeee"));
$("#groupObj").click(function () {
    var selectedObjs = canvas.getActiveGroup();
    if (selectedObjs != null) {
        var treeNodes = [];
        var canvasObjs = selectedObjs.getObjects();
        canvasObjs.forEach(function (elem) {
            var c = [];
            if (elem.type === "group") {
                c = elem.childs;
                removeFromGroupTree(elem.id);
            }
            treeNodes.push({ nome: "child", children: c });
            canvas.remove(elem);
        });
        var grp = new Group_1.Group(canvas, canvasObjs, treeNodes, null, null);
        var group = grp.getFabricShape();
        child.push({ nome: "group", children: treeNodes, canvasObj: group, selected: selectGroupObj });
        ReactDOM.render(React.createElement(MyTree_1.MyTree, { nome: "Group Layer", children: child, canvasObj: null, selected: null }), document.getElementById("treeee"));
        canvas.add(group);
        canvas.deactivateAll().renderAll();
    }
});
function selectGroupObj(group) {
    canvas.setActiveObject(group);
}
function removeFromGroupTree(id) {
    child.forEach(function (elem, index) {
        if (elem.canvasObj.id === id) {
            child.splice(index, 1);
        }
    });
}
//# sourceMappingURL=main.js.map