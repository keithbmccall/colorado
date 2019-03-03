import React, { Component, Fragment } from "react";
import { Image } from "react-native";
import { LoadingView } from "shared/containers";
class ResponsiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      imageStyle: {
        width: props.width ? `${100 / props.width}%` : `100%`,
        height: props.height ? props.height : `100%`
      }
    };
  }
  imageLoaded = () =>
    this.setState({
      loaded: true
    });

  render() {
    return (
      <Fragment>
        <Image
          source={{ uri: this.props.src }}
          style={this.state.imageStyle}
          onLoad={this.imageLoaded}
          resizeMode={this.props.resizeMode}
        />
        {!this.state.loaded && <LoadingView style={this.state.imageStyle} />}
      </Fragment>
    );
  }
}

export default ResponsiveImage;
