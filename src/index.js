import React from "react";
import ReactDOM from "react-dom";
import data from "./data.json";
import "./styles.css"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App data={data} />, rootElement);
