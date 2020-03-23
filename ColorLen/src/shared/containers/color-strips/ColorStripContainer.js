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
  getDominantSwatches = image =>
    getAllSwatches({ quality: "medium" }, image.uri, (error, swatches) =>
      error
        ? console.log("error in ColorStripcontainer.getDominantSwatches", error)
        : this.setState(
            {
              isLoaded: true,
              swatches: normalizeSwatches(swatches)
            },
            this.markAsReady()
          )
    );

  inspectColorSwatch = (color, colorIndex) => {
    console.log("inspecting", color, colorIndex);
  };
  updateColorSwatch = (color, colorIndex) => {
    console.log("updating", color, colorIndex);
  };

  render() {
    if (this.state.isLoaded) {
      return this.props.editMode ? (
        <ColorStrip
          swatches={this.state.swatches}
          pressMethod={this.inspectColorSwatch}
          longPressMethod={this.updateColorSwatch}
        />
      ) : (
        <ColorStrip swatches={this.state.swatches} />
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
