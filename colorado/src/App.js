import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  CameraRoll
} from "react-native";

//
import { Router } from "./Router";

export default class App extends Component {
  render() {
    return <Router />;
  }
}
