import * as React from "react";
import { SketchPicker } from 'react-color';

export interface MySketchProps { change: any, currentColor: string }

export class MySketchPicker extends React.Component<MySketchProps, undefined> {

    handle(color) {
        this.props.change(color.hex);
    }

    render() {

        let c = {
            "text-indent": "0",
            "line-height": "15px"
        }

        return <div style={c}>
            <SketchPicker color={this.props.currentColor}
                onChangeComplete={this.handle.bind(this)} /> </div>;
    }
}