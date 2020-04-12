import React, { Component } from "react";
import { getAllSwatches } from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import { normalizeSwatches } from "./methods";
import LoadingView from "../loading/LoadingView";

export default class ColorStripContainer extends Component {
  state = {
    isLoaded: false,
    swatches: []
  };

  static defaultProps = {
    style: {
      height: 50,
      width: "100%"
    },
    quality: "medium",
    standAlone: false,
    editMode: false
  };

  markAsReady = () => this.props.onReady && this.props.onReady();

  setSwatches = image => {
    //    checks to see if image has palettes already, if not then it runs code to find the dominant colors
    if (image.palette) {
      this.setState(
        {
          isLoaded: true,
          swatches: image.palette.swatches
        },
        this.markAsReady()
      );
    } else {
      this.getDominantSwatches(image);
    }
  };

  dominantSwatchCallback = (error, swatches) => {
    console.log("finished");
    if (error) {
      console.log("error in ColorStripContainer.getDominantSwatches", error);
      return;
    }
    this.props.onSwatchDiscovery(normalizeSwatches(swatches));

    this.setState(
      {
        isLoaded: true
      },
      this.markAsReady()
    );
  };

  getDominantSwatches = image => {
    console.log("start");
    return getAllSwatches({ quality: this.props.quality }, image.uri, this.dominantSwatchCallback);
  };

  inspectColorSwatch = (color, colorIndex) => {
    console.log("inspecting", color, colorIndex);
  };
  updateColorSwatch = (color, colorIndex) => {
    console.log("updating", color, colorIndex);
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <ColorStrip
          swatches={this.state.swatches}
          pressMethod={this.inspectColorSwatch}
          longPressMethod={this.updateColorSwatch}
        />
      );
    } else {
      return <LoadingView blank />;
    }
  }

  componentDidMount() {
    this.setSwatches(this.props.image);
  }

  componentDidUpdate(prevProps) {
    if (this.props.image.palette !== prevProps.image.palette) {
      this.setSwatches(this.props.image);
    }
  }
}
