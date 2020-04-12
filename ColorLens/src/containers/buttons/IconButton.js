import React from "react";
import { View } from "react-native";
import { IconButton as Button } from "react-native-paper";
import { colors } from "../../constants";

const IconButton = props => (
  <View style={props.style}>
    <Button size={props.size} icon={props.name} color={"white"} onPress={props.pressMethod} />
  </View>
);

IconButton.defaultProps = {
  color: colors.primary,
  size: 30
};
export default IconButton;
