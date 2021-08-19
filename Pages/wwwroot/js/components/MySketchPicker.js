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
var React = require("react");
var react_color_1 = require("react-color");
var MySketchPicker = (function (_super) {
    __extends(MySketchPicker, _super);
    function MySketchPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySketchPicker.prototype.handle = function (color) {
        this.props.change(color.hex);
    };
    MySketchPicker.prototype.render = function () {
        var c = {
            "text-indent": "0",
            "line-height": "15px"
        };
        return React.createElement("div", { style: c },
            React.createElement(react_color_1.SketchPicker, { color: this.props.currentColor, onChangeComplete: this.handle.bind(this) }),
            " ");
    };
    return MySketchPicker;
}(React.Component));
exports.MySketchPicker = MySketchPicker;
//# sourceMappingURL=MySketchPicker.js.map