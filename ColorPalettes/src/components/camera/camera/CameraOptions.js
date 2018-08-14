import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  CameraRoll,
  TouchableHighlight,
  Dimensions,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import style from "../../../Style";
const { width, height } = Dimensions.get("window");

export default class CameraOptions extends Component {
  flashHandler = e => {
    this.props.toggleFlashMode();
  };
  typeHandler = e => {
    this.props.toggleCameraType();
  };

  render() {
    let iconViewPort = "ios-aperture-outline";
    if (this.props.viewMode) {
      iconViewPort = "md-eye";
    }
    return (
      <View
        style={{
          height: height / 10,
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#eee",
          alignItems: "center",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
      >
        <View style={{ width: 70 }}>
          <Icon.Button
            size={40}
            name={this.props.iconFlashMode}
            backgroundColor="transparent"
            color="#91268d"
            onPress={this.flashHandler}
            underlayColor="transparent"
          />
        </View>
        <View>
          <Icon.Button
            size={40}
            name={iconViewPort}
            backgroundColor="transparent"
            color="#91268d"
            onPress={this.props.toggleViewport}
            underlayColor="transparent"
          />
        </View>

        <View>
          <Icon.Button
            size={40}
            name={this.props.iconCameraType}
            backgroundColor="transparent"
            color="#91268d"
            onPress={this.typeHandler}
            underlayColor="transparent"
          />
        </View>
      </View>
    );
  }
}
