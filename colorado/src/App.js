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
import axios from "axios";

//
import { Router } from "./Router";

export default class App extends Component {
  constructor() {
    super();
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(data) {
    axios({
      url: "http://localhost:8080/api/colorado",
      method: "post",
      data: data
    })
      .then(res => {
        console.log("savePalette", res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const screenProps = {
      savePalette: this.savePalette
    };
    return <Router screenProps={screenProps} />;
  }
}
