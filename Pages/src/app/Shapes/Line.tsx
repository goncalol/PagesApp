import { fabric } from "fabric"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { BasicShape } from "../Shapes/BasicShape";
import { OptionsLine } from "../components/OptionsLine";

export class Line extends BasicShape {
    
    constructor(canvas) {
        super(canvas);

        this.fabricShape = new fabric.Line([50, 100, 200, 200], {
            left: 170,
            top: 150,
            stroke: 'black',
            strokeWidth: 1
        })

        this.fabricShape.Shape = this;
    }

    presentOptions(sideBarContainer: string) {
        let c = this.canvas;
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer))
        ReactDOM.render(
            <OptionsLine shape={this} />,
            document.getElementById(sideBarContainer)
        );
    }
}