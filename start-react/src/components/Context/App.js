import React from 'react';

const ExContext = React.createContext();

class App extends React.Component {
    render() {
        return (
            <ExContext.Provider value="10">
                <Msg />
            </ExContext.Provider>
        );
    }
}

function Msg() {
    return (
        <React.Fragment>
            <Mensagem />
        </React.Fragment>
    );
}

class Mensagem extends React.Component {

    static contextType = ExContext;
    render() {
        return <p>{this.context}</p>
    }
}

export default App;  