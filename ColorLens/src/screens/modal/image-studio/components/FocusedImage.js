import React from "react";
import { View } from "react-native";
import { ColorStripContainer, LoadingView } from "shared/containers";
import { ResponsiveImage } from "shared/tools";
import style from "../styles";

//
const FocusedImage = props => {

  return props.focusedPhoto.valid ? (
    <View style={{ backgroundColor: "#aaa", height: "50%" }}>
      <ResponsiveImage height="100%" width={1} src={props.focusedPhoto.photo.uri} />
      <ColorStripContainer image={props.focusedPhoto.photo.uri} />
    </View>
  ) : (
    <LoadingView />
  );
};
export default FocusedImage;
