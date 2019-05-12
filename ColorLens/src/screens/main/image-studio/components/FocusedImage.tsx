import React from "react";
import PropTypes from "prop-types";
import { ImageWithColorStrip, LoadingView } from "shared/containers";
import style from "../styles";

//
type Props ={
  focusedPhoto: {
    valid:boolean,
    photo: Image
  }
}
type Image = {
  node:{
    location:object,
    image: object,
    group_name:string,

  },
  tempId:number,
  uri:string
}
const FocusedImage = (props:Props) =>
  props.focusedPhoto.valid ? (
    <ImageWithColorStrip
     image={props.focusedPhoto.photo}
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
