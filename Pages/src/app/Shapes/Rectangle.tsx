import { fabric } from "fabric"

import { BasicShape } from "../Shapes/BasicShape";

export class Rectangle extends BasicShape {
    
    constructor(canvas) {
        super(canvas);
        
        this.fabricShape = new fabric.Rect({
            left: 100,
            top: 100,
            fill: this.shapeColor,
            strokeWidth: this.strokeWidth,
            stroke: this.strokeColor,
            width: 50,
            height: 25,
            friendList: false
        });
        
        this.fabricShape.Shape = this;
        
    } 


    public getcookie() :string{
        return document.cookie
    }

    public Save(): any {
        return {
            Rectangle: {
               // ShapeType: "rectangle",// + this.getcookie(),
                left: Math.round(this.fabricShape.left) ,
                top: Math.round(this.fabricShape.top),
                fill: this.fabricShape.fill,
                strokeWidth: this.fabricShape.strokeWidth,
                stroke: this.fabricShape.stroke,
                width: Math.round(this.fabricShape.width),
                height: Math.round(this.fabricShape.height),
                scaleX: this.fabricShape.scaleX,
                scaleY: this.fabricShape.scaleY,
                friendList: this.friendList
            }
        };
    }

}