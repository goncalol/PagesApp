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
var MySketchPicker_1 = require("../components/MySketchPicker");
var Options_1 = require("../components/Options");
var react_bootstrap_slider_1 = require("react-bootstrap-slider");
var OptionsLine = (function (_super) {
    __extends(OptionsLine, _super);
    function OptionsLine(props) {
        return _super.call(this, props) || this;
    }
    OptionsLine.prototype.render = function () {
        var _this = this;
        return React.createElement("ul", { className: "sidebar-nav", style: { "background-color": '#222222', "height": '100%' } },
            React.createElement("li", { className: "sidebar-brand" },
                " ",
                React.createElement("a", { href: "#" }, " Options ")),
            React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickStrokeColor.bind(this) }, "Stroke Color"),
                this.state.strokeColorSelected ?
                    React.createElement("div", { className: "popoverMine" },
                        React.createElement("div", { className: "coverMine", onClick: this.handleClose }),
                        React.createElement(MySketchPicker_1.MySketchPicker, { currentColor: this.props.shape.strokeColor, change: function (color) { return _this.props.shape.fillStrokeWithColor(color); } })) : null),
            React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickStrokeWidth.bind(this) }, "Stroke Width"),
                this.state.strokeWidthSelected ?
                    React.createElement("div", { className: "popoverMine" },
                        React.createElement("div", { className: "coverMine", onClick: this.handleClose }),
                        React.createElement(react_bootstrap_slider_1.ReactBootstrapSlider, { value: this.props.shape.strokeWidth, change: function (e) { return _this.props.shape.fillStrokeWidth(e.target.value); }, step: 1, max: 10, min: 1 })) : null));
    };
    return OptionsLine;
}(Options_1.Options));
exports.OptionsLine = OptionsLine;
//# sourceMappingURL=OptionsLine.js.map