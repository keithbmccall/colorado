import React, { Component } from "react";
import { View } from "react-native";
import CameraRollContainer from '../../containers/camera-roll/CameraRollContainer'

export default class ModalScreen extends Component {
  render() {
    const modalContent = <CameraRollContainer/>
    return (
        <View style={{flex:1}}>
            {modalContent}
        </View>
    );
  }
}
