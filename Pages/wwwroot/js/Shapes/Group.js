"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = require("fabric");
var React = require("react");
var ReactDOM = require("react-dom");
var OptionsGroup_1 = require("../components/OptionsGroup");
var Circle_1 = require("../Shapes/Circle");
var Image_1 = require("../Shapes/Image");
var Text_1 = require("../Shapes/Text");
var RectanglePublic_1 = require("../Shapes/RectanglePublic");
var Group = (function () {
    function Group(canvas, canvasObjs, childs, shape, shapeSelectable) {
        this.canvas = canvas;
        if (canvasObjs !== null) {
            this.fabricShape = new fabric_1.fabric.Group(canvasObjs, {
                left: 150,
                top: 100,
                id: this.guid(),
                childs: childs
            });
        }
        else {
            var groupFabricObjs = [];
            shape.child.forEach(function (elem) {
                if (elem.Circle !== undefined) {
                    var c = new Circle_1.Circle(canvas, elem.Circle, shapeSelectable);
                    groupFabricObjs.push(c.getFabricShape());
                }
                if (elem.Image !== undefined) {
                    var i = new Image_1.Image(canvas, elem.Image, shapeSelectable);
                    groupFabricObjs.push(i.getFabricShape());
                }
                if (elem.Rectangle !== undefined) {
                    var r = new RectanglePublic_1.RectanglePublic(canvas, elem.Rectangle, shapeSelectable);
                    groupFabricObjs.push(r.getFabricShape());
                }
                if (elem.Text !== undefined) {
                    var t = new Text_1.Text(canvas, elem.Text, shapeSelectable);
                    groupFabricObjs.push(t.getFabricShape());
                }
            });
            this.fabricShape = new fabric_1.fabric.Group(groupFabricObjs, {
                left: shape.left,
                top: shape.left,
                scaleX: shape.scaleX,
                scaleY: shape.scaleY,
                id: this.guid(),
                //childs: childs,
                selectable: shapeSelectable
            });
        }
        this.fabricShape.Shape = this;
    }
    Group.prototype.presentOptions = function (sideBarContainer) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer));
        ReactDOM.render(React.createElement(OptionsGroup_1.OptionsGroup, { shape: this }), document.getElementById(sideBarContainer));
    };
    Group.prototype.Save = function () {
        var res = { Group: { left: this.fabricShape.left, top: this.fabricShape.top, scaleX: this.fabricShape.scaleX, scaleY: this.fabricShape.scaleY, Child: [] } };
        this.fabricShape.getObjects().forEach(function (e) {
            res.Group.Child.push(e.Shape.Save());
        });
        return res;
    };
    Group.prototype.getFabricShape = function () {
        return this.fabricShape;
    };
    Group.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    Group.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=Group.js.map