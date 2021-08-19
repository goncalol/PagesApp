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
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(canvas, shape, shapeSelectable) {
        var _this = _super.call(this, canvas) || this;
        if (shape == null) {
            _this.fabricShape = new fabric_1.fabric.Circle({
                radius: 20,
                fill: null,
                left: 100,
                top: 100,
                strokeWidth: 1,
                stroke: "black",
            });
        }
        else {
            _this.fabricShape = new fabric_1.fabric.Circle({
                radius: shape.radius,
                fill: shape.fill,
                left: shape.left,
                top: shape.top,
                strokeWidth: shape.strokeWidth,
                stroke: shape.stroke,
                selectable: shapeSelectable
            });
        }
        _this.fabricShape.Shape = _this;
        return _this;
    }
    Circle.prototype.Save = function () {
        return {
            Circle: {
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                fill: this.fabricShape.fill,
                strokeWidth: this.fabricShape.strokeWidth,
                stroke: this.fabricShape.strokeWidth,
                radius: Math.round(this.fabricShape.radius)
            }
        };
    };
    return Circle;
}(BasicShape_1.BasicShape));
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map