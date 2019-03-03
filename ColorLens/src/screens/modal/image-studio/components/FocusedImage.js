import React, { Component } from "react";
import { View } from "react-native";
import ResponsiveImage from "../../../shared/tools/images/ResponsiveImage";
import ColorStripContainer from "../../color-strips/ColorStripContainer";
import style from "../styles"


//
export default class ImageStudioContainer extends Component {
  renderFocusedPhoto = () => (this.props.focusedPhoto.valid ? this.props.focusedPhoto.photo.node.image.uri : "");

  render() {
    const focusedPhoto = this.renderFocusedPhoto();
    return (
      <View style={{ backgroundColor: "#aaa", height: "50%" }}>
        <ResponsiveImage height="100%" width={1} src={focusedPhoto} />
        <ColorStripContainer image={focusedPhoto} />
      </View>
    );
  }
}
