import React, { Component, Fragment } from "react";
import { Image } from "react-native";
import LoadingView from "../loading/LoadingView";

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
  isValidNumberOrPercentage = style => {
    if (typeof style === "number") {
      return;
    } else if (style[style.length - 1] === "%") {
      return;
    }
    return new Error(
      `Invalid prop '${style}' supplied to ResponsiveImage. Expected a Number or Stringed number as a percentage but received: ${style}`
    );
  };

  componentDidMount() {
    if (this.props.style) {
      this.isValidNumberOrPercentage(this.props.style.width);
      this.isValidNumberOrPercentage(this.props.style.height);
    }
  }

  render() {
    return (
      <Fragment>
        <Image
          source={{ uri: this.props.src.uri }}
          style={this.props.style}
          onLoad={this.imageIsLoaded}
          resizeMode={this.props.resizeMode}
        />
        {!this.state.isLoaded && <LoadingView blank={false} />}
      </Fragment>
    );
  }
}

export default ResponsiveImage;
