import { fabric } from "fabric"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery'

import { OptionsImage } from "../components/OptionsImage"

export class Image {

    private fabricShape: any;
    needSave: boolean;
    uploadedFile: boolean;
    linkToFile: string;
    imageName: string;
    canvas: any;

    constructor(canvas, shape, shapeSelectable) {
        this.canvas = canvas;

        if (shape == null) {
            this.fabricShape = new fabric.Image(document.getElementById("imgtest"), {
                left: 100,
                top: 100,
                width: 250,
                height: 150,
                cropLeftOffset: 0,//estas opções são para ser alteradas na ui do crop
                cropTopOffset: 0,
                cropRadius: 250 / 2,
                selectable: true
            });

            this.uploadedFile = false;
            this.fabricShape.Shape = this;
        } else {
            var uu = window.location.protocol + "//" + window.location.host + "/" + shape.link;
            let iii = this;
            fabric.Image.fromURL(uu, function (img) {
                img.set({
                    left: shape.left,
                    top: shape.top,
                    width: shape.width,
                    height: shape.height,
                    scaleX: shape.scaleX,
                    scaleY: shape.scaleY,
                    selectable: shapeSelectable
                });
                iii.fabricShape = img;

                iii.uploadedFile = false;
                iii.linkToFile = shape.link;
                iii.fabricShape.Shape = iii;
                canvas.add(iii.fabricShape);
            });
            //criar em cima uma function e fazer promisse.wait dessa function....
        }
        
    }

    setNeedToSave(b:boolean) {
        this.needSave = b;
    }

    getNeedToSave(): boolean {
        return this.needSave;
    }

    OnFileImageLoad(img) {

        this.canvas.remove(this.fabricShape);

        this.fabricShape = new fabric.Image(img, {
            left: 100,
            top: 100,
            width: 250,
            height: 150,
            cropLeftOffset: 0,//estas opções são para ser alteradas na ui do crop
            cropTopOffset: 0,
            cropRadius: 250 / 2
        });

        this.canvas.add(this.fabricShape);
        this.fabricShape.Shape = this;
        this.canvas.setActiveObject(this.fabricShape);
    }

   
    getFabricShape(): any {
        return this.fabricShape;
    }

    presentOptions(sideBarContainer: string) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer))
        ReactDOM.render(
            <OptionsImage shape={this}  />,
            document.getElementById(sideBarContainer)
        );
    }

    setImageName(name: string) {
        this.imageName = name;
    }

    SaveFile() {
        let context = this;
        $.ajax({
            url: "/Editor/SubmitImage",
            data: JSON.stringify({ img: this.fabricShape.getSvgSrc(), imgName: this.imageName }),
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                alert("uploaded")
                context.linkToFile = data.result;
                context.needSave = false;
                context.uploadedFile = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("error")
            }
        });
    }    

    public Save(): any {
        //verificar se tem alguma imagem para guardar .....
        return {
            Image: {
                left: Math.round(this.fabricShape.left),
                top: Math.round(this.fabricShape.top),
                width: Math.round(this.fabricShape.width),
                height: Math.round(this.fabricShape.height),
                link: this.linkToFile,
                scaleX: this.fabricShape.scaleX,
                scaleY: this.fabricShape.scaleY
            }
        };
    }
}