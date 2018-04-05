import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  CameraRoll,
  Modal
} from "react-native";
import { Router } from "./Router";
//
console.disableYellowBox = true;

export default class App extends Component<Props> {
  render() {
    return <Router />;
  }
}
