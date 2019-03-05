import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ColorStripContainer, LoadingView } from "shared/containers";
import { ResponsiveImage } from "shared/tools";
import style from "../styles";

//
const FocusedImage = props =>
  props.focusedPhoto.valid ? (
    <View style={style.focusedImageWrapper}>
      <ResponsiveImage height="100%" width={1} src={props.focusedPhoto.photo.uri} />
      <ColorStripContainer image={props.focusedPhoto.photo.uri} />
    </View>
  ) : (
    <LoadingView />
  );

// PROPTYPES
FocusedImage.propTypes = {
  focusedPhoto: PropTypes.shape({
    valid: PropTypes.bool.isRequired,
    photo: PropTypes.shape({
      uri: PropTypes.string.isRequired
    })
  })
};
export default FocusedImage;

