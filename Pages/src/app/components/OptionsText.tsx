import * as React from "react";
import { fabric } from "fabric"
import { MySketchPicker } from '../components/MySketchPicker';
import { Text } from '../Shapes/Text';
import { ReactBootstrapSlider } from 'react-bootstrap-slider';

export interface OptionsProps { shape: Text }
export interface PickerState { shapeColorSelected: boolean; strokeColorSelected: boolean, strokeWidthSelected: boolean, fontSizeSelected: boolean, textSelected:boolean }

export class OptionsText extends React.Component<OptionsProps, PickerState> {

    constructor(props) {
        super(props);
        this.state = {
            shapeColorSelected: false,
            strokeColorSelected: false,
            strokeWidthSelected: false,
            fontSizeSelected: false,
            textSelected:false
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

    handleClickFontSize(e) {
        this.setState({ fontSizeSelected: !this.state.fontSizeSelected })
    }

    handleClickText(e) {
        this.setState({ textSelected: !this.state.textSelected })
    }

    handleClose = () => {
        this.setState({ strokeColorSelected: false, shapeColorSelected: false, strokeWidthSelected: false, fontSizeSelected: false, textSelected: false   })
    };
    
    render() {

        return <ul className="sidebar-nav" style={{ "background-color": '#222222', "height": '100%' }}>
            <li className="sidebar-brand"> <a href="#"> Options </a></li>
            <li>
                <a href="#" onClick={this.handleClickShape.bind(this)}>Shape Color</a>
                {this.state.shapeColorSelected ?
                    <div className="popoverMine">
                        <div className="coverMine" onClick={this.handleClose} />
                        <MySketchPicker currentColor={this.props.shape.shapeColor} change={(color) => this.props.shape.fillShapeWithColor(color)} />
                    </div> : null}
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
                            change={(e) => this.props.shape.fillStrokeWidth(e.target.value)}
                            step={1}
                            max={10}
                            min={1} />

                    </div> : null}
            </li>
            <li>
                <a href="#" onClick={this.handleClickFontSize.bind(this)}>Font Size</a>
                {this.state.fontSizeSelected ?
                    <div className="popoverMine">
                        <div className="coverMine" onClick={this.handleClose} />
                        <ReactBootstrapSlider
                            value={this.props.shape.fontSize}
                            change={(e) => this.props.shape.setFontSize(e.target.value)}
                            step={5}
                            max={50}
                            min={1} />

                    </div> : null}
            </li>

            <li>
                <a href="#" onClick={this.handleClickText.bind(this)}>Text</a>
                {this.state.textSelected ?
                    <textarea className="form-control" onChange={(e) => this.props.shape.setText(e.target.value)}>{this.props.shape.text}</textarea>
                     : null}
            </li>
        </ul>;

    }
}
