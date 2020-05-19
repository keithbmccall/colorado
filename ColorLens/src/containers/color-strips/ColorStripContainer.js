import React, { PureComponent } from "react";
import { getPalette } from "react-native-color-lens";
import ColorStrip from "./components/ColorStrip";
import { normalizeSwatches } from "#utils";
import LoadingView from "../loading/LoadingView";
import { studioActions } from "#store/actions";
import { connect } from "react-redux";

class ColorStripContainer extends PureComponent {
  state = {
    isLoaded: false
    // swatches: {}
  };

  onSwatchDiscovery = swatches => {
    this.props.setSwatchesOnImage({ swatches, image: this.props.image });
  };

  markAsReady = () => this.props.onReady && this.props.onReady();

  setSwatches = image => {
    //    checks to see if image has swatches already,
    //    if not then it runs code to find the dominant colors
    if (image.swatches) {
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

    this.setState(
      {
        isLoaded: true
      },
      this.markAsReady()
    );
  };

  getDominantSwatches = image => getPalette(image.uri, this.dominantSwatchCallback);

  inspectColorSwatch = (color, colorIndex) => {
    console.log("inspecting", color, colorIndex);
  };

  updateColorSwatch = (color, colorIndex) => {
    console.log("updating", color, colorIndex);
  };

  renderContent = () => {
    const { isStatic } = this.props;

    return isStatic ? (
      <ColorStrip swatches={this.props.image.swatches} />
    ) : (
      <ColorStrip
        swatches={this.props.image.swatches}
        pressMethod={this.inspectColorSwatch}
        longPressMethod={this.updateColorSwatch}
      />
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
  isStatic: false,
  editMode: false
};

const mapDispatchToProps = dispatch => {
  const { setSwatchesOnImage } = studioActions;
  return {
    setSwatchesOnImage: ({ swatches, image }) => dispatch(setSwatchesOnImage({ swatches, image }))
  };
};

export default connect(null, mapDispatchToProps)(ColorStripContainer);
