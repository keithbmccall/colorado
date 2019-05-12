import React from "react";
import { View, TouchableOpacity } from "react-native";
import style from "../styles";
//
type Props={
    takePicture:any
}
const CameraOptions = (props:Props) => (
  <View style={style.optionsContainer}>
    <TouchableOpacity  style={style.optionsTrigger} onPress={props.takePicture} />
  </View>
);

export default CameraOptions;
