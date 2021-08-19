"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = require("fabric");
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var OptionsImage_1 = require("../components/OptionsImage");
var Image = (function () {
    function Image(canvas, shape, shapeSelectable) {
        this.canvas = canvas;
        if (shape == null) {
            this.fabricShape = new fabric_1.fabric.Image(document.getElementById("imgtest"), {
                left: 100,
                top: 100,
                width: 250,
                height: 150,
                cropLeftOffset: 0,
                cropTopOffset: 0,
                cropRadius: 250 / 2,
                selectable: true
            });
            this.uploadedFile = false;
            this.fabricShape.Shape = this;
        }
        else {
            var uu = window.location.protocol + "//" + window.location.host + "/" + shape.link;
            var iii_1 = this;
            fabric_1.fabric.Image.fromURL(uu, function (img) {
                img.set({
                    left: shape.left,
                    top: shape.top,
                    width: shape.width,
                    height: shape.height,
                    scaleX: shape.scaleX,
                    scaleY: shape.scaleY,
                    selectable: shapeSelectable
                });
                iii_1.fabricShape = img;
                iii_1.uploadedFile = false;
                iii_1.linkToFile = shape.link;
                iii_1.fabricShape.Shape = iii_1;
                canvas.add(iii_1.fabricShape);
            });
            //criar em cima uma function e fazer promisse.wait dessa function....
        }
    }
    Image.prototype.setNeedToSave = function (b) {
        this.needSave = b;
    };
    Image.prototype.getNeedToSave = function () {
        return this.needSave;
    };
    Image.prototype.OnFileImageLoad = function (img) {
        this.canvas.remove(this.fabricShape);
        this.fabricShape = new fabric_1.fabric.Image(img, {
            left: 100,
            top: 100,
            width: 250,
            height: 150,
            cropLeftOffset: 0,
            cropTopOffset: 0,
            cropRadius: 250 / 2
        });
        this.canvas.add(this.fabricShape);
        this.fabricShape.Shape = this;
        this.canvas.setActiveObject(this.fabricShape);
    };
    Image.prototype.getFabricShape = function () {
        return this.fabricShape;
    };
    Image.prototype.presentOptions = function (sideBarContainer) {
        ReactDOM.unmountComponentAtNode(document.getElementById(sideBarContainer));
        ReactDOM.render(React.createElement(OptionsImage_1.OptionsImage, { shape: this }), document.getElementById(sideBarContainer));
    };
    Image.prototype.setImageName = function (name) {
        this.imageName = name;
    };
    Image.prototype.SaveFile = function () {
        var context = this;
        $.ajax({
            url: "/Editor/SubmitImage",
            data: JSON.stringify({ img: this.fabricShape.getSvgSrc(), imgName: this.imageName }),
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                alert("uploaded");
                context.linkToFile = data.result;
                context.needSave = false;
                context.uploadedFile = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("error");
            }
        });
    };
    Image.prototype.Save = function () {
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
    };
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=Image.js.map