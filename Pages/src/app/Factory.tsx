import { fabric } from "fabric"
import { Circle } from "../app/Shapes/Circle"
import { Image } from "../app/Shapes/Image"
import { RectanglePublic } from "../app/Shapes/RectanglePublic"
import { FacebookFriends } from "../app/Shapes/FacebookFriends"
import { Group } from "./Shapes/Group"

export class Factory {

    public static Create(array: any, canvas: any, select: boolean) {
        array.forEach(function (elem) {
            var shape;
            if (elem.Circle !== undefined) {
                shape = new Circle(canvas, elem.Circle, select);
                canvas.add(shape.getFabricShape());
            }
            if (elem.Image !== undefined) {
                shape = new Image(canvas, elem.Image, select);                
            }
            if (elem.Rectangle !== undefined) {
                if (elem.Rectangle.friendList && !select)
                    new FacebookFriends(canvas, elem.Rectangle, select);
                else {
                    shape = new RectanglePublic(canvas, elem.Rectangle, select);
                    canvas.add(shape.getFabricShape());
                }
            }
            if (elem.Group !== undefined) {
                shape = new Group(canvas, null, null, elem.Group, select);
                canvas.add(shape.getFabricShape());
            }
        });
    }
}
