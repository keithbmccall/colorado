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
    this.state = {
      palettes: []
    };
    this.savePalette = this.savePalette.bind(this);
    this.getPalettes = this.getPalettes.bind(this);
  }
  savePalette(data) {
    axios({
      url: "http://localhost:8080/api/colorado",
      method: "post",
      data: data
    })
      .then(res => {
        console.log("saved palettes", res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  getPalettes() {
    console.log("called");
    axios({
      url: "http://localhost:8080/api/colorado",
      method: "get"
    }).then(res => {
      console.log("GET", res);
      this.setState({
        palettes: res.data
      });
    });
  }
  componentDidMount() {
    this.getPalettes();
  }
  render() {
    const screenProps = {
      savePalette: this.savePalette,
      getPalettes: this.getPalettes,
      palettes: this.state.palettes
    };
    return <Router screenProps={screenProps} />;
  }
}
