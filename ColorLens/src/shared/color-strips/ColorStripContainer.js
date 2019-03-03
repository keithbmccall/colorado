import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import LoadingView from "../../shared/loading/LoadingView";

export default class ColorStripContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      image: props.imageUri,
      colors: {
        swatches: []
      }
    };
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "#fff" }}>CENTERE</Text>
      </View>
    );
  }
}
