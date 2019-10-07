import React from "react";
import Filho from "./Filho";

export default class Pai extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Filho name="Emerson"/>
            </React.Fragment>
        );
    }
}
