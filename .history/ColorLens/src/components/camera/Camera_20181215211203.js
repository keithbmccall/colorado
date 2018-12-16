import React from "react";
import { View } from "react-native";
import { RNCamera } from "react-native-camera";
//
const Camera = () => (
  <RNCamera
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.on}
    permissionDialogTitle={"Permission to use camera"}
    permissionDialogMessage={"We need your permission to use your camera phone"}
  />
);

export default Camera;
