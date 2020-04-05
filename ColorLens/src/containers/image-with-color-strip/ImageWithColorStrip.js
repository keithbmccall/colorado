import React, { PureComponent, Fragment } from "react";
import { View, TouchableOpacity } from "react-native";
import LoadingView from "../../containers/loading/LoadingView";
import ColorStripContainer from "../../containers/color-strips/ColorStripContainer";
import ResponsiveImage from "../image-containers/ResponsiveImage";

export default class ImageWithColorStrip extends PureComponent {
  state = {
    isImageReady: false,
    isColorsReady: false
  };
  static defaultProps = {
    editMode: false
  };

  imageReady = () => this.setState({ isImageReady: true });

  colorsReady = () => this.setState({ isColorsReady: true });

  content = props => {
    return (
      <Fragment>
        <ResponsiveImage src={props.image.uri} onReady={this.imageReady} />
        {props.image.uri && (
          <ColorStripContainer
            image={props.image}
            onReady={this.colorsReady}
            standAlone={false}
            editMode={this.props.editMode}
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

//  PROPTYPES
