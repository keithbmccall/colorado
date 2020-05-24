import React from "react";
import { View } from "react-native";
import Spinner from "react-native-spinkit";
import style from "./styles";

const LoadingView = props =>
  props.blank ? (
    <View style={{ ...props.style }} />
  ) : (
    <View
      style={{
        ...style.loadingView,
        ...props.style
      }}
    >
      <Spinner isVisible color={style.loadingAnimation.color} size={75} type="9CubeGrid" />
    </View>
  );

LoadingView.defaultProps = {
  blank: false
};

export default LoadingView;
