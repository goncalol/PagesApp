import { fabric } from "fabric"
import { BasicShape } from "../Shapes/BasicShape";

export class Circle extends BasicShape {
    
    constructor(canvas, shape, shapeSelectable) {
        super(canvas)
        if (shape == null) {
            this.fabricShape = new fabric.Circle({
                radius: 20,
                fill: null,
                left: 100,
                top: 100,
                strokeWidth: 1,
                stroke: "black",
            });
        } else {
            this.fabricShape = new fabric.Circle({
                radius: shape.radius,
                fill: shape.fill,
                left: shape.left,
                top: shape.top,
                strokeWidth: shape.strokeWidth,
                stroke: shape.stroke,
                selectable: shapeSelectable
            });
        }
        this.fabricShape.Shape = this;
    }


    public Save(): any {
        return {
            Circle: {
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                fill: this.fabricShape.fill,
                strokeWidth: this.fabricShape.strokeWidth,
                stroke: this.fabricShape.strokeWidth,
                radius: Math.round(this.fabricShape.radius)
            }
        };
    }
    
}