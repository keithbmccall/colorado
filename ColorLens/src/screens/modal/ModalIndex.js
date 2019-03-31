import React, { Component } from "react";
import { View } from "react-native";
import CameraRollScreen from "./camera-roll/CameraRollScreen";

export default class ModalIndex extends Component {
  render() {
    const modalContent = <CameraRollScreen/>
    return (
        <View style={{flex:1,paddingTop:50}}>
            {modalContent}
        </View>
    );
  }
}
