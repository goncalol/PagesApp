import * as React from "react";

interface TreeNode { nome: string, children: TreeNode[], canvasObj: any, selected:any }
interface TreeState { toggled: boolean }
interface Nodes { nodes: TreeNode[] }
interface Node { node: TreeNode }

export class MyTree extends React.Component<TreeNode, TreeState> {

    constructor() {
        super();
        this.state = {
            toggled: false
        }
    }

    toogle(arrow) {
        if (this.state.toggled == false) {
            arrow.target.className = "glyphicon glyphicon-triangle-bottom"
        } else {
            arrow.target.className = "glyphicon glyphicon-triangle-right"
        }
        
        this.setState({ toggled: !this.state.toggled })
    }

    render() {

        let arrowSpan = null;
        if (this.props.children.length !== 0) {
            arrowSpan = <span className="glyphicon glyphicon-triangle-right" style={{ "cursor": "pointer" }} onClick={this.toogle.bind(this)} />
        }

        return (
            <div className="treeWrapper">
                <ul className="groupLayer">
                    <li className="rootNode">
                        {arrowSpan}                
                        {this.props.nome}
                        {this.state.toggled == true ? <TreeNodes nodes={this.props.children} /> : null}
                    </li>
                </ul>
            </div>
        );
    }
}

export class TreeNodes extends React.Component<Nodes, undefined> {

    render() {

        let nodes = [];
        for (var i = 0; i < this.props.nodes.length; i++) {
            nodes.push(<TreeeNode node={this.props.nodes[i]} />);
        }

        return (<ul className="groupLayer">{nodes}</ul>);
    }
}

export class TreeeNode extends React.Component<Node, TreeState> {

    constructor() {
        super();
        this.state = {
            toggled: false
        }
    }

    toogle(arrow) {
        if (this.state.toggled == false) {
            arrow.target.className = "glyphicon glyphicon-triangle-bottom"
        } else {
            arrow.target.className = "glyphicon glyphicon-triangle-right"
        }

        this.setState({ toggled: !this.state.toggled })
    }

    select() {
        if (this.props.node.selected !== undefined) {
            this.props.node.selected(this.props.node.canvasObj)
        }
    }

    render() {

        let arrowSpan = null;
        if (this.props.node.children.length !== 0) {
            arrowSpan = <span className="glyphicon glyphicon-triangle-right" style={{ "cursor": "pointer" }} onClick={this.toogle.bind(this)} />
        }

        return (
            <li className="rootNode" style={{ "cursor": "pointer" }} onClick={this.select.bind(this)}>
                    {arrowSpan}
                    {this.props.node.nome}
                    {this.state.toggled == true ? <TreeNodes nodes={this.props.node.children} /> : null}
                </li>
        );
    }
}
