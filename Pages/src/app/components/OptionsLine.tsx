import * as React from "react";
import { fabric } from "fabric"
import { MySketchPicker } from '../components/MySketchPicker';
import { BasicShape } from '../Shapes/BasicShape';
import { Options } from '../components/Options';
import { ReactBootstrapSlider } from 'react-bootstrap-slider';

export class OptionsLine extends Options {

    constructor(props) {
        super(props);
    }

    render() {

        return <ul className="sidebar-nav" style={{ "background-color": '#222222', "height": '100%' }}>
            <li className="sidebar-brand"> <a href="#"> Options </a></li>
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
        </ul>;

    }
}
