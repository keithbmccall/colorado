import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ResponsiveImage } from "shared/tools";

export default class ImageWithColorStrip extends Component {
  constructor() {
    super();
    this.state = { isImageReady: false, isColorsReady: false };
  }
  imageReady = () => this.setState({ isImageReady: true });
  colorsReady = () => this.setState({ isColorsReady: true });

  content = props => (
    <Fragment>
      <ResponsiveImage src={props.src} onReady={this.imageReady} />
      <ColorStripContainer src={props.src} onReady={this.colorsReady} />
      {!this.state.imageReady && !this.state.colorsReady && (
        <LoadingView style={{ width: "100%", height: "100%" }} />
      )}
    </Fragment>
  );

  renderContent = props =>
    props.button ? (
      <TouchableOpacity
        underlayColor="transparent"
        style={props.style}
        onPress={props.pressMethod}
      >
        {this.content(props)}
      </TouchableOpacity>
    ) : (
      <View style={props.style}>{this.content(props)}</View>
    );

  render() {
    return <Fragment>{this.renderContent(this.props)}</Fragment>;
  }
}

//  PROPTYPES
ImageWithColorStrip.defaultProps = { button: false };
ImageWithColorStrip.propTypes = {
  src: PropTypes.string.isRequired,
  button: PropTypes.bool,
  style: PropTypes.any,
  pressMethod: PropTypes.func
};
