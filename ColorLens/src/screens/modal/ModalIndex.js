import React, { Component } from "react";
import { View } from "react-native";
import ImageStudioScreen from "./image-studio/ImageStudioScreen";

export default class ModalIndex extends Component {
  render() {
    const modalContent = <ImageStudioScreen/>
    return (
        <View style={{flex:1,paddingTop:50}}>
            {modalContent}
        </View>
    );
  }
}
