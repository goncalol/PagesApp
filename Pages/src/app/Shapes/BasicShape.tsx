import { fabric } from "fabric"
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Options } from "../components/Options";

export class BasicShape {

    fabricShape: any;
    private id: string;
    protected canvas: any;
    shapeColor: any;
    friendList: any;
    strokeColor: any;
    strokeWidth: any;

    constructor(canvas) {
        this.canvas = canvas;
        this.strokeColor = "000000";
        this.shapeColor = "rgba(0,0,0,0)";
        this.friendList = false;
        this.strokeWidth = 1;
        this.id = this.guid();
    }

    presentOptions(sideBarContainer: string) {
        let c = this.canvas;
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer))
        ReactDOM.render(
            <Options  shape={this} />,
            document.getElementById(sideBarContainer)
        );
    }

    fillShapeWithColor(jscolor) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.setColor(jscolor);
            this.shapeColor = jscolor;
            this.canvas.renderAll();
        }
    }

    fillStrokeWithColor(jscolor) {
        var selectedObj = this.canvas.getActiveObject();
        if (selectedObj != null) {
            selectedObj.set('stroke', jscolor);
            this.strokeColor = jscolor;
            this.canvas.renderAll();
        }
    }

    fillStrokeWidth(width) {
        var selectedObj = this.canvas.getActiveObject();

        if (selectedObj != null) {
            var WidthInt = parseInt(width);
            this.strokeWidth = WidthInt;
            var newStrokeWidth = this.strokeWidth / ((selectedObj.scaleX + selectedObj.scaleY) / 2);
            selectedObj.set('strokeWidth', newStrokeWidth);
            this.canvas.renderAll();
        }
    }


    getFriendsList(){
        return this.friendList;
    };

    setFriendList(friendList) {
        this.friendList = friendList;
       /* var selectedObj = this.canvas.getActiveObject();

        if (selectedObj != null) {
            this.friendList = friendList;
            selectedObj.set('friendList', friendList);
        }*/
    }

    guid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    getFabricShape(): any {
        return this.fabricShape;
    }
}
