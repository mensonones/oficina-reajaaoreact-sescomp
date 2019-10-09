import React from 'react';
import UseContext from "./UseContext";
import Button from "./Button";

class App extends React.Component {
    render() {
        return (
            <UseContext>
                <Button></Button>
            </UseContext>
        );
    }
}

export default App;  