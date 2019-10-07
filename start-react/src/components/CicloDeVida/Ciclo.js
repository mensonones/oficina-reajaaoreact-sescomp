import React from "react";

class Ciclo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    componentWillMount() {
        this.setState({
            name: "React"
        });
    }

    componentDidMount() { }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
            this.setState({ name: "Atualizando" });
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
            </React.Fragment>
        );
    }
}

export default Ciclo;
