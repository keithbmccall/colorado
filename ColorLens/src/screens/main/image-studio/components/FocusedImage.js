import React from "react";
import PropTypes from "prop-types";
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
    <LoadingView style={style.focusedImageWrapper}/>
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
