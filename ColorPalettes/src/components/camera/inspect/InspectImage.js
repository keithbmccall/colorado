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
  Modal,
  StatusBar,
  PanResponder
} from "react-native";
//

import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class InspectImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.currentImage
    };
  }

  UNSAFE_componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (e, gestureState) => {
        console.log("touch", e.nativeEvent.locationX, e.nativeEvent.locationY);
      },
      onPanResponderRelease: (e, gestureState) => {
        this.props.findColor(e, this.state.currentImage);
      }
    });
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        pinchGestureEnabled={true}
        maximumZoomScale={2}
      >
        <Image
          {...this.panResponder.panHandlers}
          style={{
            flex: 1,
            resizeMode: "contain"
          }}
          source={{
            uri: this.props.currentImage.uri
          }}
          onLayout={this.props.onCurrentImageLayout.bind(this)}
        />
      </ScrollView>
    );
  }
}
