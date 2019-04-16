import React, { Component } from "react";
import PropTypes from "prop-types";
import { getAllSwatches } from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import { LoadingView } from "shared/containers";
import { normalizeSwatches } from "./methods";

export default class ColorStripContainer extends Component {
  state = {
    options: { quality: "medium" },
    colors: {
      isLoaded: false,
      swatches: []
    }
  };

  getDominantSwatches = src =>
    getAllSwatches(this.state.options, src, (error, swatches) =>
      error
        ? console.log("error in PhotosPage.getSwatches", error)
        : this.setState(
            {
              colors: { isLoaded: true, swatches: normalizeSwatches(swatches) }
            },
            this.props.onReady && this.props.onReady()
          )
    );

  render() {
    return this.state.colors.isLoaded ? (
      <ColorStrip
        // containerStyle={this.props.containerStyle}
        // pressMethod={}
        // longPressMethod={}
        swatches={this.state.colors.swatches}
      />
    ) : (
      <LoadingView />
    );
  }

  componentDidMount() {
    this.getDominantSwatches(this.props.src);
  }
}

ColorStripContainer.defaultProps = {
  containerStyle: {
    height: 50,
    width: "100%"
  }
};
ColorStripContainer.propTypes = {
  src: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};
