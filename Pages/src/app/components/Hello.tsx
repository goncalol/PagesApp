import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { txt: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {

    constructor() {
        super();
        this.state = {
            txt:"this is the state txt"
        }
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        return <div>
            <Widget update={this.update.bind(this)}/>
            <p>Hello from {this.props.compiler} and {this.props.framework}! State:{this.state.txt}</p>
        </div>;
        //return <Button>I <Heart /> React</Button>
    }
}

class Heart extends React.Component<undefined, undefined>  {
    render() {
        return <span>&hearts;</span>
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />;

const Button = (props) => <button>{props.children}</button>