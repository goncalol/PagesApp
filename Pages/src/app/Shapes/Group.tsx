import { fabric } from "fabric"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { OptionsGroup } from "../components/OptionsGroup"
import { Circle } from "../Shapes/Circle"
import { Image } from "../Shapes/Image"
import { Text } from "../Shapes/Text"
import { RectanglePublic } from "../Shapes/RectanglePublic"

export class Group {

    private canvas: any;
    private fabricShape: any;

    constructor(canvas,canvasObjs,childs, shape, shapeSelectable) {
        this.canvas = canvas;
        if (canvasObjs !== null) {

            this.fabricShape = new fabric.Group(canvasObjs, {
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
                    var c = new Circle(canvas, elem.Circle, shapeSelectable);
                    groupFabricObjs.push(c.getFabricShape());
                }
                if (elem.Image !== undefined) {
                    var i = new Image(canvas, elem.Image, shapeSelectable);
                    groupFabricObjs.push(i.getFabricShape());
                }
                if (elem.Rectangle !== undefined) {
                    var r = new RectanglePublic(canvas, elem.Rectangle, shapeSelectable);
                    groupFabricObjs.push(r.getFabricShape());
                }
                if (elem.Text !== undefined) {
                    var t = new Text(canvas, elem.Text, shapeSelectable);
                    groupFabricObjs.push(t.getFabricShape());
                }
            });

            this.fabricShape = new fabric.Group(groupFabricObjs, {
                left: shape.left,
                top: shape.left,
                scaleX: shape.scaleX,
                scaleY: shape.scaleY,
                id: this.guid(),//deveria ser o guardado no file....
                //childs: childs,
                selectable: shapeSelectable
            });
        }

        this.fabricShape.Shape = this;
    }

    presentOptions(sideBarContainer: string) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer))
        ReactDOM.render(
            <OptionsGroup shape={this} />,
            document.getElementById(sideBarContainer)
        );
    }

    public Save(): any {
        var res = { Group: { left: this.fabricShape.left, top: this.fabricShape.top, scaleX: this.fabricShape.scaleX, scaleY: this.fabricShape.scaleY, Child: [] } };
        
        this.fabricShape.getObjects().forEach(function (e) {

            res.Group.Child.push(e.Shape.Save());
        })

       return res;
    }

    getFabricShape(): any {
        return this.fabricShape;
    }

    guid():string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}