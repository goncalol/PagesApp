import { fabric } from "fabric"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { BasicShape } from "../Shapes/BasicShape";
import { OptionsText } from "../components/OptionsText";

export class Text extends BasicShape {

    fontSize: number;
    text: string;

    constructor(canvas, shape, shapeSelectable) {
        super(canvas)
        if (shape === null) {

            this.fontSize = 10;
            this.text = 'Write your Text Here!';

            this.fabricShape = new fabric.Text(this.text, {
                left: 100,
                top: 100,
                fontSize: this.fontSize,
                fontFamily: 'Comic Sans'
            });
        } else {
            this.fabricShape = new fabric.Text(shape.text, {
                left: shape.left,
                top: shape.top,
                scaleX: shape.scaleX,
                scaleY: shape.scaleY,
                fontSize: 10,
                fontFamily: 'Comic Sans'
            });
        }

        this.fabricShape.Shape = this;
    }

    presentOptions(sideBarContainer: string) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer))
        ReactDOM.render(
            <OptionsText shape={this} />,
            document.getElementById(sideBarContainer)
        );
    }

    setFontSize(size) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.set('fontSize', size);
            this.fontSize = size;
            this.canvas.renderAll();
        }
    }

    setText(txt) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.setText(txt);
            this.text = txt;
            this.canvas.renderAll();
        }
    }

    public Save(): any {

        return {
            Text: {
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                width: Math.round(this.fabricShape.width),
                height: Math.round(this.fabricShape.height),
                text: this.text,
                scaleX: this.fabricShape.scaleX,
                scaleY: this.fabricShape.scaleY
            }
        };
    }
}