import React, { PureComponent, Fragment } from "react";
import { View, TouchableOpacity } from "react-native";
import LoadingView from "../../containers/loading/LoadingView";
import ColorStripContainer from "../../containers/color-strips/ColorStripContainer";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import { connect } from "react-redux";
import { studioActions } from "#store/actions";

class ImageWithColorStrip extends PureComponent {
  state = {
    isImageReady: false,
    isColorsReady: false
  };
  static defaultProps = {
    editMode: false
  };

  imageReady = () => {
    this.setState({ isImageReady: true });
  };

  colorsReady = () => {
    this.setState({ isColorsReady: true });
  };

  onSwatchDiscovery = swatches => {
    this.props.setSwatchesOnImage({ swatches, image: this.props.image });
  };

  content = props => {
    return (
      <Fragment>
        <ResponsiveImage src={props.image} onReady={this.imageReady} />
        {props.image.uri && (
          <ColorStripContainer
            image={props.image}
            onReady={this.colorsReady}
            editMode={this.props.editMode}
            onSwatchDiscovery={this.onSwatchDiscovery}
          />
        )}
        {(!this.state.isColorsReady || !this.state.isColorsReady) && <LoadingView blank={false} />}
      </Fragment>
    );
  };

  renderContent = props =>
    props.pressMethod ? (
      <TouchableOpacity style={props.style} onPress={props.pressMethod} activeOpacity={0.8}>
        {this.content(props)}
      </TouchableOpacity>
    ) : (
      <View style={props.style}>{this.content(props)}</View>
    );

  render() {
    return <Fragment>{this.renderContent(this.props)}</Fragment>;
  }
}
const mapDispatchToProps = dispatch => {
  const { setSwatchesOnImage } = studioActions;
  return {
    setSwatchesOnImage: ({ swatches, image }) => dispatch(setSwatchesOnImage({ swatches, image }))
  };
};
export default connect(null, mapDispatchToProps)(ImageWithColorStrip);
//  PROPTYPES
