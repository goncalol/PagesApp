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
var OptionsLine_1 = require("../components/OptionsLine");
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.fabricShape = new fabric_1.fabric.Line([50, 100, 200, 200], {
            left: 170,
            top: 150,
            stroke: 'black',
            strokeWidth: 1
        });
        _this.fabricShape.Shape = _this;
        return _this;
    }
    Line.prototype.presentOptions = function (sideBarContainer) {
        var c = this.canvas;
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer));
        ReactDOM.render(React.createElement(OptionsLine_1.OptionsLine, { shape: this }), document.getElementById(sideBarContainer));
    };
    return Line;
}(BasicShape_1.BasicShape));
exports.Line = Line;
//# sourceMappingURL=Line.js.map