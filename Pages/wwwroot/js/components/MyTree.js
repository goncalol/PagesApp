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
var MyTree = (function (_super) {
    __extends(MyTree, _super);
    function MyTree() {
        var _this = _super.call(this) || this;
        _this.state = {
            toggled: false
        };
        return _this;
    }
    MyTree.prototype.toogle = function (arrow) {
        if (this.state.toggled == false) {
            arrow.target.className = "glyphicon glyphicon-triangle-bottom";
        }
        else {
            arrow.target.className = "glyphicon glyphicon-triangle-right";
        }
        this.setState({ toggled: !this.state.toggled });
    };
    MyTree.prototype.render = function () {
        var arrowSpan = null;
        if (this.props.children.length !== 0) {
            arrowSpan = React.createElement("span", { className: "glyphicon glyphicon-triangle-right", style: { "cursor": "pointer" }, onClick: this.toogle.bind(this) });
        }
        return (React.createElement("div", { className: "treeWrapper" },
            React.createElement("ul", { className: "groupLayer" },
                React.createElement("li", { className: "rootNode" },
                    arrowSpan,
                    this.props.nome,
                    this.state.toggled == true ? React.createElement(TreeNodes, { nodes: this.props.children }) : null))));
    };
    return MyTree;
}(React.Component));
exports.MyTree = MyTree;
var TreeNodes = (function (_super) {
    __extends(TreeNodes, _super);
    function TreeNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeNodes.prototype.render = function () {
        var nodes = [];
        for (var i = 0; i < this.props.nodes.length; i++) {
            nodes.push(React.createElement(TreeeNode, { node: this.props.nodes[i] }));
        }
        return (React.createElement("ul", { className: "groupLayer" }, nodes));
    };
    return TreeNodes;
}(React.Component));
exports.TreeNodes = TreeNodes;
var TreeeNode = (function (_super) {
    __extends(TreeeNode, _super);
    function TreeeNode() {
        var _this = _super.call(this) || this;
        _this.state = {
            toggled: false
        };
        return _this;
    }
    TreeeNode.prototype.toogle = function (arrow) {
        if (this.state.toggled == false) {
            arrow.target.className = "glyphicon glyphicon-triangle-bottom";
        }
        else {
            arrow.target.className = "glyphicon glyphicon-triangle-right";
        }
        this.setState({ toggled: !this.state.toggled });
    };
    TreeeNode.prototype.select = function () {
        if (this.props.node.selected !== undefined) {
            this.props.node.selected(this.props.node.canvasObj);
        }
    };
    TreeeNode.prototype.render = function () {
        var arrowSpan = null;
        if (this.props.node.children.length !== 0) {
            arrowSpan = React.createElement("span", { className: "glyphicon glyphicon-triangle-right", style: { "cursor": "pointer" }, onClick: this.toogle.bind(this) });
        }
        return (React.createElement("li", { className: "rootNode", style: { "cursor": "pointer" }, onClick: this.select.bind(this) },
            arrowSpan,
            this.props.node.nome,
            this.state.toggled == true ? React.createElement(TreeNodes, { nodes: this.props.node.children }) : null));
    };
    return TreeeNode;
}(React.Component));
exports.TreeeNode = TreeeNode;
//# sourceMappingURL=MyTree.js.map