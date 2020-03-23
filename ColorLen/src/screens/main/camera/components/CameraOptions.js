import React from "react";
import { View, TouchableOpacity } from "react-native";
import style from "../styles";
//

const CameraOptions = props => (
  <View style={style.optionsContainer}>
    <TouchableOpacity style={style.optionsTrigger} onPress={props.takePicture} />
  </View>
);

export default CameraOptions;
