import React, { Component } from "react";
import { getPalette } from "react-native-color-lens";
import ColorStrip from "./components/ColorStrip";
import { normalizeSwatches } from "#utils";
import LoadingView from "../loading/LoadingView";
import { studioActions } from "#store/actions";
import { connect } from "react-redux";

class ColorStripContainer extends Component {
  state = {
    isLoaded: false
  };

  onSwatchDiscovery = swatches => {
    const { isStudio } = this.props;
    if (isStudio) {
      this.props.setSwatchesOnStudioImage({ swatches, image: this.props.image });
    } else {
      this.props.setSwatchesOnImage({ swatches, image: this.props.image });
    }
  };

  markAsReady = () => this.props.onReady && this.props.onReady();

  setSwatches = image => {
    const { swatches = null } = image;
    //    checks to see if image has swatches already,
    //    if not then it runs code to find the dominant colors
    if (swatches) {
      this.setState(
        {
          isLoaded: true
        },
        this.markAsReady()
      );
    } else {
      this.getDominantSwatches(image);
    }
  };

  dominantSwatchCallback = (error, swatches) => {
    if (error) {
      console.log("error in ColorStripContainer.getDominantSwatches", error);
      return;
    }

    this.onSwatchDiscovery(normalizeSwatches(swatches));
  };

  getDominantSwatches = image => {
    getPalette(image.uri, this.dominantSwatchCallback);
  };

  renderContent = () => {
    const { isStudio } = this.props;

    return isStudio ? (
      <ColorStrip
        swatches={this.props.image.swatches}
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}
        isStudio
      />
    ) : (
      <ColorStrip swatches={this.props.image.swatches} />
    );
  };

  render() {
    return this.state.isLoaded ? this.renderContent() : <LoadingView blank />;
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

ColorStripContainer.defaultProps = {
  style: {
    height: 50,
    width: "100%"
  },
  quality: "medium",
  isStudio: false,
  editMode: false
};

const mapDispatchToProps = dispatch => {
  const { setSwatchesOnImage, setSwatchesOnStudioImage } = studioActions;
  return {
    setSwatchesOnImage: ({ swatches, image }) => dispatch(setSwatchesOnImage({ swatches, image })),
    setSwatchesOnStudioImage: ({ swatches, image }) =>
      dispatch(setSwatchesOnStudioImage({ swatches, image }))
  };
};

export default connect(null, mapDispatchToProps)(ColorStripContainer);
