import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.nome !== this.state.nome) {
            this.setState({ nome: "Atualizando" });
        }
    }

    render() {
        return (
            <React.Fragment>
                <p>{this.state.count}</p>
                <button onClick={this.updateCount}>+</button>
            </React.Fragment>
        );
    }
}

export default App;