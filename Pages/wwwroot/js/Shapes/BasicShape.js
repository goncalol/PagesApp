"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Options_1 = require("../components/Options");
var BasicShape = (function () {
    function BasicShape(canvas) {
        this.canvas = canvas;
        this.strokeColor = "000000";
        this.shapeColor = "rgba(0,0,0,0)";
        this.friendList = false;
        this.strokeWidth = 1;
        this.id = this.guid();
    }
    BasicShape.prototype.presentOptions = function (sideBarContainer) {
        var c = this.canvas;
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer));
        ReactDOM.render(React.createElement(Options_1.Options, { shape: this }), document.getElementById(sideBarContainer));
    };
    BasicShape.prototype.fillShapeWithColor = function (jscolor) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.setColor(jscolor);
            this.shapeColor = jscolor;
            this.canvas.renderAll();
        }
    };
    BasicShape.prototype.fillStrokeWithColor = function (jscolor) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.set('stroke', jscolor);
            this.strokeColor = jscolor;
            this.canvas.renderAll();
        }
    };
    BasicShape.prototype.fillStrokeWidth = function (width) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            var WidthInt = parseInt(width);
            this.strokeWidth = WidthInt;
            var newStrokeWidth = this.strokeWidth / ((selectedObj.scaleX + selectedObj.scaleY) / 2);
            selectedObj.set('strokeWidth', newStrokeWidth);
            this.canvas.renderAll();
        }
    };
    BasicShape.prototype.getFriendsList = function () {
        return this.friendList;
    };
    ;
    BasicShape.prototype.setFriendList = function (friendList) {
        this.friendList = friendList;
        /* var selectedObj = this.canvas.getActiveObject();
 
         if (selectedObj != null) {
             this.friendList = friendList;
             selectedObj.set('friendList', friendList);
         }*/
    };
    BasicShape.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    BasicShape.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    BasicShape.prototype.getFabricShape = function () {
        return this.fabricShape;
    };
    return BasicShape;
}());
exports.BasicShape = BasicShape;
//# sourceMappingURL=BasicShape.js.map