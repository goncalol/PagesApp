import { Rectangle } from "./Shapes/Rectangle"
import { Circle } from "./Shapes/Circle"
import { Image } from "./Shapes/Image"
import { Line } from "./Shapes/Line"
import { Text } from "./Shapes/Text"
import { Group } from "./Shapes/Group"
import { fabric } from "fabric"
import { Factory } from "../app/Factory"
import { MyTree } from "./components/MyTree"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery'

export class Main{

    /*private greeter: Greeter;
    constructor() {
        this.greeter = new Greeter("World");
    }

    sayHello() {
        alert(this.greeter.greetingMessage);
    }

    get greetingMessage(): string{
        return this.greeter.greetingMessage;
    }   */
    
}

//var m = new Main();
//m.sayHello();

var currCanvas : any  = document.getElementById('myCanvas');
var currCtx = currCanvas.getContext('2d');
var viewportWidth = currCanvas.parentElement.clientWidth;
var viewportHeight = window.innerHeight;
currCanvas.style.position = "fixed";
currCanvas.setAttribute("width", ""+viewportWidth);
currCanvas.setAttribute("height",""+ viewportHeight);
//currCanvas.style.top = 0;

var canvas = new fabric.Canvas('myCanvas');

if ($("#hiddenDiv").length != 0) {//has content to edit...
    var content = JSON.parse($("#hiddenDiv").text())

    var factory = Factory.Create(content, canvas,true);
}

$("#rectangleBtn").click(function () {

    var rect = new Rectangle(canvas);

    canvas.add(rect.getFabricShape());    
})

$("#circleBtn").click(function () {

    var circle = new Circle(canvas, null, null);

    canvas.add(circle.getFabricShape());
})

$("#lineBtn").click(function () {

    var line = new Line(canvas);

    canvas.add(line.getFabricShape());
})

$("#textBtn").click(function () {

    var text = new Text(canvas,null,null);

    canvas.add(text.getFabricShape());
})

$("#imageBtn").click(function () {

    var img = new Image(canvas,null,null);

    canvas.add(img.getFabricShape());
})


canvas.on('object:selected', function (e) {

    if (e.target._objects !== undefined && e.target.id === undefined) {//multiple object selection
        return;//dont want to present options on sidebar
    }
    
    e.target.Shape.presentOptions("rightSideBar");
});

canvas.on({
        'object:scaling': function (e) {
            var obj = e.target;
            if (e.target.type === "group") return;
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
    })
    var postMessage = JSON.stringify(result);

    $.ajax({
        url: $("#submitId").text(),
        data: postMessage,
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log(data)
            if (data.success) {
                alert("Success")
                location.href = "http://localhost:53793/Editor/Public"
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
    //console.log(XML)
})

var child = []

ReactDOM.render(<MyTree nome="Group Layer" children={child} canvasObj={null} selected={null}/>, document.getElementById("treeee"));

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
            treeNodes.push({nome:"child",children:c});
            canvas.remove(elem);
        })  


        var grp = new Group(canvas, canvasObjs, treeNodes, null, null);
        var group = grp.getFabricShape();

        child.push({ nome: "group", children: treeNodes, canvasObj: group, selected: selectGroupObj });
        ReactDOM.render(<MyTree nome="Group Layer" children={child} canvasObj={null} selected={null} />, document.getElementById("treeee"));

        canvas.add(group); 

        canvas.deactivateAll().renderAll();
    }
});

function selectGroupObj(group) {
    canvas.setActiveObject(group);
}

function removeFromGroupTree(id) {
    child.forEach(function (elem,index) {
        if (elem.canvasObj.id === id) {
            child.splice(index, 1);
        }
    })
}






