import { fabric } from "fabric"
import { Factory } from "../app/Factory"

var currCanvas: any = document.getElementById('myCanvas');
var currCtx = currCanvas.getContext('2d');
var viewportWidth = currCanvas.parentElement.clientWidth;
var viewportHeight = window.innerHeight;
currCanvas.style.position = "fixed";
currCanvas.setAttribute("width", "" + viewportWidth);
currCanvas.setAttribute("height", "" + viewportHeight);

var canvas = new fabric.Canvas('myCanvas');

canvas.selection = false

canvas.hoverCursor = 'default'

var arr = JSON.parse(document.getElementById("hiddenDiv").textContent);

var factory = Factory.Create(arr,canvas,false);

