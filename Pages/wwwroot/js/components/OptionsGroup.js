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
var OptionsGroup = (function (_super) {
    __extends(OptionsGroup, _super);
    function OptionsGroup(props) {
        return _super.call(this, props) || this;
    }
    OptionsGroup.prototype.render = function () {
        return React.createElement("ul", { className: "sidebar-nav", style: { "background-color": '#222222', "height": '100%' } },
            React.createElement("li", { className: "sidebar-brand" },
                " ",
                React.createElement("a", { href: "#" }, " Options ")));
    };
    return OptionsGroup;
}(React.Component));
exports.OptionsGroup = OptionsGroup;
//# sourceMappingURL=OptionsGroup.js.map