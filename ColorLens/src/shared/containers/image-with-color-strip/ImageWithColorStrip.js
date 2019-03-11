import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ResponsiveImage } from "shared/tools";

export default class ImageWithColorStrip extends Component {
  constructor() {
    super();
    this.state = { isReady: false };
  }
  onReady = () => this.setState({ isReady: true });

  content = props => (
    <Fragment>
      <ResponsiveImage src={props.src} onReady={this.onReady} />
      <ColorStripContainer src={props.src} />
    </Fragment>
  );

  renderContent = props =>
    props.button ? (
      <TouchableOpacity underlayColor="transparent" style={props.style} onPress={props.pressMethod}>
        {this.content(props)}
        <Fragment>{!this.state.isReady && <LoadingView style={{ width: "100%", height: "100%" }} />}</Fragment>
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
