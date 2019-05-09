import React from "react";
import { View, Text } from "react-native";

//
type Props ={
    style?:object
}
const LoadingView = (props:Props) => (
  <View style={props.style}>
    <Text>LOADING</Text>
  </View>
);

export default LoadingView;
