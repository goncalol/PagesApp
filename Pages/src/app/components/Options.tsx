import * as React from "react";
import { fabric } from "fabric";
import { MySketchPicker } from '../components/MySketchPicker';
import { BasicShape } from '../Shapes/BasicShape';
import { ReactBootstrapSlider } from 'react-bootstrap-slider';

export interface OptionsProps { shape: BasicShape }
export interface OptionState { shapeColorSelected: boolean; strokeColorSelected: boolean, strokeWidthSelected: boolean, checked:boolean}

export class Options extends React.Component<OptionsProps, OptionState> {
    
    constructor(props) {
        super(props);
        this.state = { 
            shapeColorSelected: false,
            strokeColorSelected: false,
            strokeWidthSelected: false,
            checked: this.props.shape.getFriendsList()
        }
    }

    handleClickShape(e) {
        this.setState({ shapeColorSelected: !this.state.shapeColorSelected })
    }

    handleClickStrokeColor(e) {
        this.setState({ strokeColorSelected: !this.state.strokeColorSelected })
    }

    handleClickStrokeWidth(e) {
        this.setState({ strokeWidthSelected: !this.state.strokeWidthSelected })
    }

    handleClose = () => {
        this.setState({ strokeColorSelected: false, shapeColorSelected: false, strokeWidthSelected:false })
    };

        
    render() {
        
        return <ul className="sidebar-nav" style={{ "background-color": '#222222', "height": '100%'}}>
            <li className="sidebar-brand"> <a href="#"> Options </a></li>
            <li>
                <a href="#" onClick={this.handleClickShape.bind(this)}>Shape Color</a>
                {this.state.shapeColorSelected ?
                    <div className="popoverMine">
                        <div className="coverMine" onClick={this.handleClose} />
                        <MySketchPicker currentColor={this.props.shape.shapeColor} change={(color) => this.props.shape.fillShapeWithColor(color)} /> 
                    </div>: null}
            </li>
            <li>
                <a href="#" onClick={this.handleClickStrokeColor.bind(this)}>Stroke Color</a>
                {this.state.strokeColorSelected ?
                    <div className="popoverMine">
                        <div className="coverMine" onClick={this.handleClose} />
                        <MySketchPicker currentColor={this.props.shape.strokeColor} change={(color) => this.props.shape.fillStrokeWithColor(color)} /> 
                    </div> : null}
            </li>
            <li>
                <a href="#" onClick={this.handleClickStrokeWidth.bind(this)}>Stroke Width</a>
                {this.state.strokeWidthSelected ?
                    <div className="popoverMine">
                        <div className="coverMine" onClick={this.handleClose} />
                        <ReactBootstrapSlider
                            value={this.props.shape.strokeWidth}
                            change={(e) => this.props.shape.fillStrokeWidth(e.target.value )}
                            step={1}
                            max={10}
                            min={1} />
                       
                    </div> : null}
            </li>
            <li >                 
                <p style={{ "display": 'inline', "color": "#999999", "margin-right":"10" }}>Is Friend List?</p>
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => {
                        this.setState({ checked: !this.state.checked })
                        this.props.shape.setFriendList(e.target.checked)
                    }} />
            </li>
        </ul>;
        
    }
}
