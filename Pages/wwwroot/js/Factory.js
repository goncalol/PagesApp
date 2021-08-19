"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("../app/Shapes/Circle");
var Image_1 = require("../app/Shapes/Image");
var RectanglePublic_1 = require("../app/Shapes/RectanglePublic");
var FacebookFriends_1 = require("../app/Shapes/FacebookFriends");
var Group_1 = require("./Shapes/Group");
var Factory = (function () {
    function Factory() {
    }
    Factory.Create = function (array, canvas, select) {
        array.forEach(function (elem) {
            var shape;
            if (elem.Circle !== undefined) {
                shape = new Circle_1.Circle(canvas, elem.Circle, select);
                canvas.add(shape.getFabricShape());
            }
            if (elem.Image !== undefined) {
                shape = new Image_1.Image(canvas, elem.Image, select);
            }
            if (elem.Rectangle !== undefined) {
                if (elem.Rectangle.friendList && !select)
                    new FacebookFriends_1.FacebookFriends(canvas, elem.Rectangle, select);
                else {
                    shape = new RectanglePublic_1.RectanglePublic(canvas, elem.Rectangle, select);
                    canvas.add(shape.getFabricShape());
                }
            }
            if (elem.Group !== undefined) {
                shape = new Group_1.Group(canvas, null, null, elem.Group, select);
                canvas.add(shape.getFabricShape());
            }
        });
    };
    return Factory;
}());
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map