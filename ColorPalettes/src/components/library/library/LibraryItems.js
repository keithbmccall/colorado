import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  CameraRoll,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  TouchableOpacity
} from "react-native";
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class LibraryItems extends Component {
  renderLibrarySwatches = (swatch, key) => {
    return (
      <View
        key={key}
        style={{
          backgroundColor: swatch,
          borderColor: swatch,
          width: width / 6,
          height: width / 6
        }}
      />
    );
  };
  toggleLibraryModalHandler = () => {
    this.props.toggleLibraryModal(this.state.palette);
  };

  componentDidMount() {
    this.setState({
      palette: this.props.palette
    });
  }
  render() {
    const swatches = this.props.palette.swatches.map(
      this.renderLibrarySwatches
    );
    return (
      <View
        style={{
          marginBottom: 25,
          marginTop: 25,
          alignItems: "center"
        }}
      >
        <Text style={{ color: "black" }}>{this.props.palette.name}</Text>

        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            underlayColor="transparent"
            onPress={this.toggleLibraryModalHandler}
          >
            <View
              style={{
                flexDirection: "row"
              }}
            >
              {swatches}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
