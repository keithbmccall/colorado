import React from "react";
import { View } from "react-native";
import Spinner from "react-native-spinkit";
import defaultStyle from "./styles";
import PropTypes from "prop-types";

const LoadingView = ({ blank, style }) =>
  blank ? (
    <View style={{ ...style }} />
  ) : (
    <View
      style={{
        ...defaultStyle.loadingView,
        ...style
      }}
    >
      <Spinner isVisible color={style.loadingAnimation.color} size={75} type="9CubeGrid" />
    </View>
  );

LoadingView.propTypes = {
  blank: PropTypes.bool,
  style: PropTypes.object
};
LoadingView.defaultProps = {
  blank: false
};

export default LoadingView;
