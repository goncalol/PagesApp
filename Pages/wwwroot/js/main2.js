"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = require("fabric");
var Factory_1 = require("../app/Factory");
var currCanvas = document.getElementById('myCanvas');
var currCtx = currCanvas.getContext('2d');
var viewportWidth = currCanvas.parentElement.clientWidth;
var viewportHeight = window.innerHeight;
currCanvas.style.position = "fixed";
currCanvas.setAttribute("width", "" + viewportWidth);
currCanvas.setAttribute("height", "" + viewportHeight);
var canvas = new fabric_1.fabric.Canvas('myCanvas');
canvas.selection = false;
canvas.hoverCursor = 'default';
var arr = JSON.parse(document.getElementById("hiddenDiv").textContent);
var factory = Factory_1.Factory.Create(arr, canvas, false);
//# sourceMappingURL=main2.js.map