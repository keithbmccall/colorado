import React, { Component } from "react";
import AppContainer from "./navigation/Router";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

