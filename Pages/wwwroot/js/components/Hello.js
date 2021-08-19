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
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        var _this = _super.call(this) || this;
        _this.state = {
            txt: "this is the state txt"
        };
        return _this;
    }
    Hello.prototype.update = function (e) {
        this.setState({ txt: e.target.value });
    };
    Hello.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Widget, { update: this.update.bind(this) }),
            React.createElement("p", null,
                "Hello from ",
                this.props.compiler,
                " and ",
                this.props.framework,
                "! State:",
                this.state.txt));
        //return <Button>I <Heart /> React</Button>
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
var Heart = (function (_super) {
    __extends(Heart, _super);
    function Heart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heart.prototype.render = function () {
        return React.createElement("span", null, "\u2665");
    };
    return Heart;
}(React.Component));
var Widget = function (props) {
    return React.createElement("input", { type: "text", onChange: props.update });
};
var Button = function (props) { return React.createElement("button", null, props.children); };
//# sourceMappingURL=Hello.js.map