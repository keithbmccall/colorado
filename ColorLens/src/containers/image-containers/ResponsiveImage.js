import React, { Component, Fragment } from "react";
import { Image } from "react-native";
import LoadingView from "../loading/LoadingView";
import { isValidNumberOrPercentage } from "#utils";

class ResponsiveImage extends Component {
  state = {
    isLoaded: false
  };
  static defaultProps = {
    resizeMode: "cover",
    style: { width: "100%", height: "100%" }
  };

  imageIsLoaded = () => {
    if (this.props.onReady) {
      this.props.onReady();
    }
    this.setState({
      isLoaded: true
    });
  };

  componentDidMount() {
    const {
      style: { width, height },
      ...style
    } = this.props;
    if (style) {
      isValidNumberOrPercentage(width);
      isValidNumberOrPercentage(height);
    }
  }

  render() {
    const {
      style,
      resizeMode,
      src: { uri }
    } = this.props;
    return (
      <Fragment>
        <Image source={{ uri }} style={style} onLoad={this.imageIsLoaded} resizeMode={resizeMode} />
        {!this.state.isLoaded && <LoadingView blank={false} />}
      </Fragment>
    );
  }
}

export default ResponsiveImage;
