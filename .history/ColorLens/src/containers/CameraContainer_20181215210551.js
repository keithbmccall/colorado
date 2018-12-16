import React, { Component } from "react";
import { View, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import Camera from "../components/camera/Camera";

export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Camera
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }
      />
    );
  }
}
