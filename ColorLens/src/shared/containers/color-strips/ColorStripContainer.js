import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { getAllSwatches } from "react-native-palette";
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
  renderSwatches = colors =>
    colors.swatches.map((swatch, key) => (
      <View style={{ flex: 1, backgroundColor: swatch.color }} key={key} />
    ));

  renderContent = colors => {
    colors.loaded ? this.renderSwatches(colors) : <LoadingView />;
  };
  render() {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "15%",
          width: "100%",
          flexDirection: "row"
        }}
      >
        {this.renderContent(this.state.colors)}
      </View>
    );
  }
  componentDidMount() {
    this.getDominantSwatches(this.props.src);
  }
}

ColorStripContainer.propTypes = {
  src: PropTypes.string.isRequired
};
