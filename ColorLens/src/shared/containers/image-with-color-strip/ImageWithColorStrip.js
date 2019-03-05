import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ResponsiveImage } from "shared/tools";

const ImageWithColorStrip = props => (
  <Fragment>
    <ResponsiveImage src={props.src} />
    <ColorStripContainer src={props.src} />
  </Fragment>
);

ImageWithColorStrip.propTypes = {
  src: PropTypes.string.isRequired
};
export default ImageWithColorStrip;
