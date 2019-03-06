import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { ImageWithColorStrip, LoadingView } from "shared/containers";
import style from "../styles";

//
const FocusedImage = props =>
  props.focusedPhoto.valid ? (
    <ImageWithColorStrip
      src={props.focusedPhoto.photo.uri}
      style={style.focusedImageWrapper}
    />
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
