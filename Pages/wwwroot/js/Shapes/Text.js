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
var React = require("react");
var ReactDOM = require("react-dom");
var BasicShape_1 = require("../Shapes/BasicShape");
var OptionsText_1 = require("../components/OptionsText");
var Text = (function (_super) {
    __extends(Text, _super);
    function Text(canvas, shape, shapeSelectable) {
        var _this = _super.call(this, canvas) || this;
        if (shape === null) {
            _this.fontSize = 10;
            _this.text = 'Write your Text Here!';
            _this.fabricShape = new fabric_1.fabric.Text(_this.text, {
                left: 100,
                top: 100,
                fontSize: _this.fontSize,
                fontFamily: 'Comic Sans'
            });
        }
        else {
            _this.fabricShape = new fabric_1.fabric.Text(shape.text, {
                left: shape.left,
                top: shape.top,
                scaleX: shape.scaleX,
                scaleY: shape.scaleY,
                fontSize: 10,
                fontFamily: 'Comic Sans'
            });
        }
        _this.fabricShape.Shape = _this;
        return _this;
    }
    Text.prototype.presentOptions = function (sideBarContainer) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer));
        ReactDOM.render(React.createElement(OptionsText_1.OptionsText, { shape: this }), document.getElementById(sideBarContainer));
    };
    Text.prototype.setFontSize = function (size) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.set('fontSize', size);
            this.fontSize = size;
            this.canvas.renderAll();
        }
    };
    Text.prototype.setText = function (txt) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.setText(txt);
            this.text = txt;
            this.canvas.renderAll();
        }
    };
    Text.prototype.Save = function () {
        return {
            Text: {
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                width: Math.round(this.fabricShape.width),
                height: Math.round(this.fabricShape.height),
                text: this.text,
                scaleX: this.fabricShape.scaleX,
                scaleY: this.fabricShape.scaleY
            }
        };
    };
    return Text;
}(BasicShape_1.BasicShape));
exports.Text = Text;
//# sourceMappingURL=Text.js.map