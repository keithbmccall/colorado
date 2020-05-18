import React, { PureComponent } from "react";
import { getAllSwatches } from "react-native-palette";
// import { getSwatches } from "react-native-color-lens";
import ColorStrip from "./components/ColorStrip";
import { normalizeSwatches } from "#utils";
import LoadingView from "../loading/LoadingView";
import { studioActions } from "#store/actions";
import { connect } from "react-redux";

class ColorStripContainer extends PureComponent {
  state = {
    isLoaded: false,
    swatches: {}
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

  onSwatchDiscovery = swatches => {
    this.props.setSwatchesOnImage({ swatches, image: this.props.image });
  };

  markAsReady = () => this.props.onReady && this.props.onReady();

  setSwatches = image => {
    //    checks to see if image has palettes already, if not then it runs code to find the dominant colors
    if (image.swatches) {
      this.setState(
        {
          isLoaded: true,
          swatches: image.swatches
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

    this.onSwatchDiscovery(normalizeSwatches(swatches));

    this.setState(
      {
        isLoaded: true
      },
      this.markAsReady()
    );
  };

  getDominantSwatches = image =>
    getAllSwatches({ quality: this.props.quality }, image.uri, this.dominantSwatchCallback);

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
    if (this.props.image.swatches !== prevProps.image.swatches) {
      this.setSwatches(this.props.image);
    }
  }
}

const mapDispatchToProps = dispatch => {
  const { setSwatchesOnImage } = studioActions;
  return {
    setSwatchesOnImage: ({ swatches, image }) => dispatch(setSwatchesOnImage({ swatches, image }))
  };
};

export default connect(null, mapDispatchToProps)(ColorStripContainer);
