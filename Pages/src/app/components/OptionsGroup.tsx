import * as React from "react";
import { fabric } from "fabric";

export interface OptionsProps { shape: any }

export class OptionsGroup extends React.Component<OptionsProps, any> {
    
    constructor(props) {
        super(props);
    }

    render() {

        return <ul className="sidebar-nav" style={{ "background-color": '#222222', "height": '100%' }}>
            <li className="sidebar-brand"> <a href="#"> Options </a></li>           
        </ul>
    }
}