import { fabric } from "fabric"

import { Rectangle } from "../Shapes/Rectangle";

export class RectanglePublic extends Rectangle {

    constructor(canvas, shape, select) {
        super(canvas);
        this.fabricShape = new fabric.Rect({
            width: shape.width,
            height: shape.height,
            fill: shape.fill,
            left: shape.left,
            top: shape.top,
            strokeWidth: shape.strokeWidth,
            stroke: shape.stroke,
            selectable: select,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        this.friendList = shape.friendList
        this.strokeColor = shape.stroke;
        this.shapeColor = shape.fill;
        this.strokeWidth = shape.strokeWidth;

        this.fabricShape.Shape = this;
    }

} 