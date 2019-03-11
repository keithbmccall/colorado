import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// import FastImage from "react-native-fast-image";
import { Image } from "react-native";
import { LoadingView } from "shared/containers";
class ResponsiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  imageIsLoaded = () => {
    this.props.onReady && this.props.onReady();
    this.setState({
      isLoaded: true
    });
  };

  render() {
    return (
      <Fragment>
        <Image
          source={{ uri: this.props.src }}
          style={{ width: "100%", height: "100%" }}
          onLoad={this.imageIsLoaded}
          resizeMode={this.props.resizeMode}
        />
        {!this.state.isLoaded && (
          <LoadingView style={{ width: "100%", height: "100%" }} />
        )}
      </Fragment>
    );
  }
}

const isValidNumberOrPercentage = (props, propName, componentName) => {
  if (typeof props[propName] === "number") {
    return;
  } else if (
    typeof props[propName] === "string" &&
    props[propName][props[propName].length - 1] === "%"
  ) {
    return;
  }
  return new Error(
    `Invalid prop '${propName}' supplied to '${componentName}'. Expected a Number or Stringed number as a percentage but received: ${
      props[propName]
    }`
  );
};
ResponsiveImage.defaultProps = {
  resizeMode: "cover",
  style: { width: "100%", height: "100%" }
};
ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  resizeMode: PropTypes.string,
  style: PropTypes.shape({
    width: isValidNumberOrPercentage,
    height: isValidNumberOrPercentage
  })
};
export default ResponsiveImage;
