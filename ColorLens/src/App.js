import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppContainer from "./navigation/Router";

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

