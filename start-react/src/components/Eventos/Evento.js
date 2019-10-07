import React from "react";

class Evento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Russas",
        }
        this.updateName = this.updateName.bind(this);
    }

    updateName(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                Cidade: <input type="text" value={this.state.name} onChange={this.updateName} />
                <h5>{this.state.name}</h5>
            </React.Fragment>
        );
    }
}

export default Evento;