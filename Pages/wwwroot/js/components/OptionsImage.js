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
var OptionsImage = (function (_super) {
    __extends(OptionsImage, _super);
    function OptionsImage(props) {
        return _super.call(this, props) || this;
    }
    OptionsImage.prototype.handleClickSaveFile = function (e) {
        this.props.shape.SaveFile();
    };
    OptionsImage.prototype.handleClickFileLoader = function (e) {
        this.inputElement.click();
    };
    OptionsImage.prototype.handleOnSetName = function (e) {
        this.props.shape.setImageName(e.target.value);
    };
    OptionsImage.prototype.fileChoosen = function (e) {
        var propp = this.props.shape;
        var reader = new FileReader();
        reader.onload = function (evt) {
            var imgObj = new Image();
            imgObj.src = evt.target["result"];
            imgObj.onload = function () {
                // var image = new fabric.Image(imgObj);
                propp.setNeedToSave(true);
                propp.OnFileImageLoad(imgObj);
            };
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    OptionsImage.prototype.render = function () {
        var _this = this;
        return React.createElement("ul", { className: "sidebar-nav", style: { "background-color": '#222222', "height": '100%' } },
            React.createElement("li", { className: "sidebar-brand" },
                " ",
                React.createElement("a", { href: "#" }, " Options ")),
            React.createElement("li", null,
                React.createElement("input", { id: "upload", style: { "display": "none" }, onChange: this.fileChoosen.bind(this), type: "file", accept: "image/*", ref: function (r) { return _this.inputElement = r; } }),
                React.createElement("a", { href: "#", onClick: this.handleClickFileLoader.bind(this) }, "Load File")),
            React.createElement("li", null,
                React.createElement("a", { href: "#" }, "Load Url")),
            React.createElement("li", null,
                React.createElement("a", { href: "#" }, "Circle crop")),
            React.createElement("input", { type: "text", name: "name", onChange: this.handleOnSetName.bind(this) }),
            this.props.shape.getNeedToSave() ? React.createElement("li", null,
                React.createElement("a", { href: "#", onClick: this.handleClickSaveFile.bind(this) }, "Save File")) : null);
    };
    return OptionsImage;
}(React.Component));
exports.OptionsImage = OptionsImage;
//# sourceMappingURL=OptionsImage.js.map