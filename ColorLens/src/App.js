import React, { Component } from "react";
import Navigation from "./navigation/Router";
import { Provider, connect } from "react-redux";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      // <Provider>
        <Navigation />
      // </Provider>
    );
  }
}
