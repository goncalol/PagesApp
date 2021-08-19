import * as React from "react";
import $ from "jquery";
import { fabric } from "fabric";

export interface OptionsProps { shape: any }

export class OptionsImage extends React.Component<OptionsProps, any> {

    inputElement: any;

    constructor(props) {
        super(props);
    }

    handleClickSaveFile(e) {
        this.props.shape.SaveFile();
    }
    
    handleClickFileLoader(e) {

        this.inputElement.click();
    }

    handleOnSetName(e) {
        this.props.shape.setImageName(e.target.value)
    }

    fileChoosen(e) {
        let propp = this.props.shape;
        var reader = new FileReader();
        reader.onload = function (evt) {
            var imgObj = new Image();
            
            imgObj.src = evt.target["result"];
            imgObj.onload = function () {
                // var image = new fabric.Image(imgObj);
                propp.setNeedToSave(true);
                propp.OnFileImageLoad(imgObj);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    
    }

    render() {

        return <ul className="sidebar-nav" style={{ "background-color": '#222222', "height": '100%'}}>
                <li className="sidebar-brand"> <a href="#"> Options </a></li>
                <li>
                <input id="upload" style={{"display":"none"}} onChange={this.fileChoosen.bind(this)}  type="file" accept="image/*" ref={(r) => this.inputElement = r}/>
                    <a href="#" onClick={this.handleClickFileLoader.bind(this)}>Load File</a>
                </li>
                <li><a href="#">Load Url</a></li>
                <li><a href="#">Circle crop</a></li>
                <input type="text" name="name" onChange={this.handleOnSetName.bind(this)}/>
                {this.props.shape.getNeedToSave() ? <li><a href="#" onClick={this.handleClickSaveFile.bind(this)}>Save File</a></li> : null}
                
            </ul>
    }
}