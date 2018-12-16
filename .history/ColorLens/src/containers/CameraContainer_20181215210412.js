import React, { Component } from "react";
import { View, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import Camera from "../components/camera/Camera";

export default class CameraContainer extends Component {
  render() {
    return <Camera />;
  }
}
