import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ResponsiveImage } from "shared/tools";

const content = props => (
  <Fragment>
    <ResponsiveImage src={props.src} />
    <ColorStripContainer src={props.src} />
  </Fragment>
);

const renderContent = props =>
  props.button ? (
    <TouchableOpacity
      underlayColor="transparent"
      style={props.style}
      onPress={props.clickMethod}
    >
      {content(props)}
    </TouchableOpacity>
  ) : (
    <View style={props.style}>{content(props)}</View>
  );

const ImageWithColorStrip = props => (
  <Fragment>{renderContent(props)}</Fragment>
);
//  PROPTYPES
ImageWithColorStrip.defaultProps = { button: false };
ImageWithColorStrip.propTypes = {
  src: PropTypes.string.isRequired,
  button: PropTypes.bool,
  style: PropTypes.any,
  clickMethod: PropTypes.func
};
export default ImageWithColorStrip;
