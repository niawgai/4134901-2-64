import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import UI from "./components/UI";
import Datable from "./components/Table";
ReactDOM.render(
  <>
    <Car age="25" eye="black" />
    <List />
  </>,
  document.getElementById("root")
);
