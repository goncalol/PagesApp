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
var react_bootstrap_slider_1 = require("react-bootstrap-slider");
var OptionsText = (function (_super) {
    __extends(OptionsText, _super);
    function OptionsText(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.setState({ strokeColorSelected: false, shapeColorSelected: false, strokeWidthSelected: false, fontSizeSelected: false, textSelected: false });
        };
        _this.state = {
            shapeColorSelected: false,
            strokeColorSelected: false,
            strokeWidthSelected: false,
            fontSizeSelected: false,
            textSelected: false
        };
        return _this;
    }
    OptionsText.prototype.handleClickShape = function (e) {
        this.setState({ shapeColorSelected: !this.state.shapeColorSelected });
    };
    OptionsText.prototype.handleClickStrokeColor = function (e) {
        this.setState({ strokeColorSelected: !this.state.strokeColorSelected });
    };
    OptionsText.prototype.handleClickStrokeWidth = function (e) {
        this.setState({ strokeWidthSelected: !this.state.strokeWidthSelected });
    };
    OptionsText.prototype.handleClickFontSize = function (e) {
        this.setState({ fontSizeSelected: !this.state.fontSizeSelected });
    };
    OptionsText.prototype.handleClickText = function (e) {
        this.setState({ textSelected: !this.state.textSelected });
    };
    OptionsText.prototype.render = function () {
        var _this = this;
        return React.createElement("ul", { className: "sidebar-nav", style: { "background-color": '#222222', "height": '100%' } },
            React.createElement("li", { className: "sidebar-brand" },
                " ",
                React.createElement("a", { href: "#" }, " Options ")),
            React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickShape.bind(this) }, "Shape Color"),
                this.state.shapeColorSelected ?
                    React.createElement("div", { className: "popoverMine" },
                        React.createElement("div", { className: "coverMine", onClick: this.handleClose }),
                        React.createElement(MySketchPicker_1.MySketchPicker, { currentColor: this.props.shape.shapeColor, change: function (color) { return _this.props.shape.fillShapeWithColor(color); } })) : null),
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
                        React.createElement(react_bootstrap_slider_1.ReactBootstrapSlider, { value: this.props.shape.strokeWidth, change: function (e) { return _this.props.shape.fillStrokeWidth(e.target.value); }, step: 1, max: 10, min: 1 })) : null),
            React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickFontSize.bind(this) }, "Font Size"),
                this.state.fontSizeSelected ?
                    React.createElement("div", { className: "popoverMine" },
                        React.createElement("div", { className: "coverMine", onClick: this.handleClose }),
                        React.createElement(react_bootstrap_slider_1.ReactBootstrapSlider, { value: this.props.shape.fontSize, change: function (e) { return _this.props.shape.setFontSize(e.target.value); }, step: 5, max: 50, min: 1 })) : null),
            React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickText.bind(this) }, "Text"),
                this.state.textSelected ?
                    React.createElement("textarea", { className: "form-control", onChange: function (e) { return _this.props.shape.setText(e.target.value); } }, this.props.shape.text)
                    : null));
    };
    return OptionsText;
}(React.Component));
exports.OptionsText = OptionsText;
//# sourceMappingURL=OptionsText.js.map