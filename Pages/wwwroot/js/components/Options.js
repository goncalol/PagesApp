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
var Options = (function (_super) {
    __extends(Options, _super);
    function Options(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            _this.setState({ strokeColorSelected: false, shapeColorSelected: false, strokeWidthSelected: false });
        };
        _this.state = {
            shapeColorSelected: false,
            strokeColorSelected: false,
            strokeWidthSelected: false,
            checked: _this.props.shape.getFriendsList()
        };
        return _this;
    }
    Options.prototype.handleClickShape = function (e) {
        this.setState({ shapeColorSelected: !this.state.shapeColorSelected });
    };
    Options.prototype.handleClickStrokeColor = function (e) {
        this.setState({ strokeColorSelected: !this.state.strokeColorSelected });
    };
    Options.prototype.handleClickStrokeWidth = function (e) {
        this.setState({ strokeWidthSelected: !this.state.strokeWidthSelected });
    };
    Options.prototype.render = function () {
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
                React.createElement("p", { style: { "display": 'inline', "color": "#999999", "margin-right": "10" } }, "Is Friend List?"),
                React.createElement("input", { name: "isGoing", type: "checkbox", checked: this.state.checked, onChange: function (e) {
                        _this.setState({ checked: !_this.state.checked });
                        _this.props.shape.setFriendList(e.target.checked);
                    } })));
    };
    return Options;
}(React.Component));
exports.Options = Options;
//# sourceMappingURL=Options.js.map