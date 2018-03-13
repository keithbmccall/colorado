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

const SLASH_REQUESTS = "https://7daa4500.ngrok.io/api/colorado";
// const SLASH_REQUESTS = "http://localhost:8080/api/colorado";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: [],
      palettesLoaded: false
    };
    this.savePalette = this.savePalette.bind(this);
    this.getPalettes = this.getPalettes.bind(this);
  }
  savePalette(data) {
    axios({
      url: SLASH_REQUESTS,
      method: "post",
      data: data
    })
      .then(res => {
        console.log("saved palettes", res);
        this.getPalettes();
      })
      .catch(err => {
        console.log(err);
      });
  }
  getPalettes() {
    console.log("called", SLASH_REQUESTS);
    axios({
      url: SLASH_REQUESTS,
      method: "get"
    })
      .then(res => {
        console.log("GET", res);
        const palettesResponse = res.data.palettes.sort((a, b) => {
          return b.id - a.id;
        });

        this.setState({
          palettes: palettesResponse,
          palettesLoaded: true
        });
      })
      .catch(err => {
        console.log("getPalettes", err);
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
