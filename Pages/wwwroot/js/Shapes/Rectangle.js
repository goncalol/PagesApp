"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = require("fabric");
var BasicShape_1 = require("../Shapes/BasicShape");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.fabricShape = new fabric_1.fabric.Rect({
            left: 100,
            top: 100,
            fill: _this.shapeColor,
            strokeWidth: _this.strokeWidth,
            stroke: _this.strokeColor,
            width: 50,
            height: 25,
            friendList: false
        });
        _this.fabricShape.Shape = _this;
        return _this;
    }
    Rectangle.prototype.getcookie = function () {
        return document.cookie;
    };
    Rectangle.prototype.Save = function () {
        return {
            Rectangle: {
                // ShapeType: "rectangle",// + this.getcookie(),
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                fill: this.fabricShape.fill,
                strokeWidth: this.fabricShape.strokeWidth,
                stroke: this.fabricShape.stroke,
                width: Math.round(this.fabricShape.width),
                height: Math.round(this.fabricShape.height),
                scaleX: this.fabricShape.scaleX,
                scaleY: this.fabricShape.scaleY,
                friendList: this.friendList
            }
        };
    };
    return Rectangle;
}(BasicShape_1.BasicShape));
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map