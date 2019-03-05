import React, { Component, Fragment } from "react";
import { Image } from "react-native";
import { LoadingView } from "shared/containers";
class ResponsiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
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
          style={{ width: "100%", height: "100%" }}
          onLoad={this.imageLoaded}
          resizeMode={this.props.resizeMode}
        />
        {!this.state.loaded && <LoadingView style={{ width: "100%", height: "100%" }} />}
      </Fragment>
    );
  }
}

export default ResponsiveImage;
