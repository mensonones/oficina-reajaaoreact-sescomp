
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Hooks from "./components/Hooks/Hooks";
import ClassComp from "./components/Hooks/ClassExample";
import Pai from "./components/Props/Pai";
import Evento from "./components/Eventos/Evento";
import AppContext from "./components/Context/App";
import Fetch from "./components/ConsumeAPI/Fetch";

ReactDOM.render(<AppContext/>, document.getElementById("root"));