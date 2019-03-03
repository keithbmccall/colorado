import React, { Component } from "react";
import { View } from "react-native";
import { getAllSwatches } from "react-native-palette";
import { LoadingView } from "shared/containers";
import { normalizeSwatches, equalizeSwatchLength, renderSwatches } from "./methods";

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

  getDominantSwatches = image => {
    getAllSwatches(this.state.options, image, (error, swatches) => {
      if (error) {
        console.log("error in PhotosPage.getSwatches", error);
      } else {
        this.setState({
          colors: { loaded: true, swatches: normalizeSwatches(swatches) }
        });
      }
    });
  };
  renderSwatches = (swatch, key) => {
    return <View style={{ flex: 1, backgroundColor: swatch.color }} key={key} />;
  };

  render() {
    return this.state.colors.loaded ? (
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: '15%',
          width: "100%",
          flexDirection: "row"
        }}
      >
        {this.state.colors.swatches.map(this.renderSwatches)}
      </View>
    ) : (
      <LoadingView />
    );
  }
  componentDidMount() {
    this.getDominantSwatches(this.props.image);
  }
}
