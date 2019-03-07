import React, { Component } from "react";
import PropTypes from "prop-types";
import { getAllSwatches } from "react-native-palette";
import ColorStrip from './components/ColorStrip';
import { LoadingView } from "shared/containers";
import { normalizeSwatches } from "./methods";

export default class ColorStripContainer extends Component {
  constructor() {
    super();
    this.state = {
      options: { quality: "medium" },
      colors: {
        loaded: false,
        swatches: []
      }
    };
  }

  getDominantSwatches = src => {
    getAllSwatches(this.state.options, src, (error, swatches) => {
      if (error) {
        console.log("error in PhotosPage.getSwatches", error);
      } else {
        this.setState({
          colors: { loaded: true, swatches: normalizeSwatches(swatches) }
        });
      }
    });
  };
  render() {
    return this.state.colors.loaded ? (
      <ColorStrip 
          containerStyle={this.props.containerStyle}
          clickMethod={}
          longPressMethod={}
          swatches={this.state.colors.swatches}
      />
      ) : <LoadingView/>
  }
  componentDidMount() {
    this.getDominantSwatches(this.props.src);
  }
}

ColorStripContainer.defaultProps={
  containerStyle: {
    height:50,
    width: '100%'
  }
}
ColorStripContainer.propTypes = {
  src: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
};
