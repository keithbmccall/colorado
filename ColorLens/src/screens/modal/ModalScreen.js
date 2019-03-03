import React, { Component } from "react";
import { View } from "react-native";
import ImageStudioContainer from "./image-studio/ImageStudioContainer";

export default class ModalScreen extends Component {
  render() {
    const modalContent = <ImageStudioContainer/>
    return (
        <View style={{flex:1,paddingTop:50}}>
            {modalContent}
        </View>
    );
  }
}
