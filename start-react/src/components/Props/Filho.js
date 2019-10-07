import React from "react";

export default class Filho extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.name}</p>
        )
    }
}