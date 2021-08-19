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
var Rectangle_1 = require("../Shapes/Rectangle");
var RectanglePublic = (function (_super) {
    __extends(RectanglePublic, _super);
    function RectanglePublic(canvas, shape, select) {
        var _this = _super.call(this, canvas) || this;
        _this.fabricShape = new fabric_1.fabric.Rect({
            width: shape.width,
            height: shape.height,
            fill: shape.fill,
            left: shape.left,
            top: shape.top,
            strokeWidth: shape.strokeWidth,
            stroke: shape.stroke,
            selectable: select,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        _this.friendList = shape.friendList;
        _this.strokeColor = shape.stroke;
        _this.shapeColor = shape.fill;
        _this.strokeWidth = shape.strokeWidth;
        _this.fabricShape.Shape = _this;
        return _this;
    }
    return RectanglePublic;
}(Rectangle_1.Rectangle));
exports.RectanglePublic = RectanglePublic;
//# sourceMappingURL=RectanglePublic.js.map