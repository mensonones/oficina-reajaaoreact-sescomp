import React from "react";

import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      repos: []
    }
  }

  componentWillMount() {
    this.setState({
      nome: "React"
    });
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mensonones/repos')
      .then(res => res.json())
      .then(data => this.setState({ repos: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nome !== this.state.nome) {
      this.setState({ nome: "Atualizando" });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.nome}</h1>
        {
          this.state.repos.map((dados) => {
            return (
              <ul key={dados.id}>
                <li>{dados.name} </li>
              </ul>
            )
          })
        }
      </React.Fragment>
    );
  }
}

export default App;