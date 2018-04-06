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
import { getAllSwatches } from "react-native-palette";
//
console.disableYellowBox = true;

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      cameraRollImages: [],
      cameraRollLoaded: false,
      cameraRollModalOpen: false,
      //
      currentImage: "",
      currentImageMounted: false,
      inspectModalOpen: false
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
  setCurrentImage = image => {
    this.setState({
      currentImage: image,
      currentImageMounted: true
    });
  };
  toggleInspectModal = () => {
    this.setState({
      inspectModalOpen: !this.state.inspectModalOpen
    });
  };
  render() {
    const screenProps = {
      getCameraRoll: this.getCameraRoll,
      cameraRollImages: this.state.cameraRollImages,
      cameraRollLoaded: this.state.cameraRollLoaded,
      //camera roll modal functionality
      cameraRollModalOpen: this.state.cameraRollModalOpen,
      toggleCameraRollModal: this.toggleCameraRollModal,
      // inspect image
      setCurrentImage: this.setCurrentImage,
      currentImage: this.state.currentImage,
      currentImageMounted: this.state.currentImageMounted,
      inspectModalOpen: this.state.inspectModalOpen,
      toggleInspectModal: this.toggleInspectModal
    };
    return <Router screenProps={screenProps} />;
  }
}
