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
  constructor() {
    super();
    this.state = {
      cameraRollImages: [],
      cameraRollLoaded: false,
      cameraRollModalOpen: false
    };
  }
  getCameraRoll = () => {
    CameraRoll.getPhotos({
      first: 18
    })
      .then(r => {
        console.log("GETIMAGES", r.edges);
        this.setState({
          cameraRollImages: r.edges,
          cameraRollLoaded: true
        });
        this.toggleCameraRollModal();
      })
      .catch(err => {
        console.log("error in getImages", err);
      });
  };
  toggleCameraRollModal = () => {
    this.setState({
      cameraRollModalOpen: !this.state.cameraRollModalOpen
    });
  };
  render() {
    const screenProps = {
      getCameraRoll: this.getCameraRoll,
      cameraRollImages: this.state.cameraRollImages,
      cameraRollLoaded: this.state.cameraRollLoaded,
      //camera roll modal functionality
      cameraRollModalOpen: this.state.cameraRollModalOpen,
      toggleCameraRollModal: this.toggleCameraRollModal
      //
    };
    return <Router screenProps={screenProps} />;
  }
}
