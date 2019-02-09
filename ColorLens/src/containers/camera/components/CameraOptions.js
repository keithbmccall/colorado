import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../styles";
//
const CameraOptions = props => (
  <View style={style.optionsContainer}>
    <TouchableOpacity
      underlayColor="transparent"
      style={style.optionsTrigger}
      onPress={props.takePicture}
    />
  </View>
);

export default CameraOptions;
