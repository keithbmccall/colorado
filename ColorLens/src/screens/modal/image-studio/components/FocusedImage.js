import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ImageWithColorStrip, LoadingView } from "shared/containers";
import style from "../styles";

//
const FocusedImage = props =>
  props.focusedPhoto.valid ? (
    <View style={style.focusedImageWrapper}>
      <ImageWithColorStrip src={props.focusedPhoto.photo.uri} />
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
