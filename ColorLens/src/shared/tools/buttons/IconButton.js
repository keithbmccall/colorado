import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "shared/constants";

const IconButton = props => (
  <View style={props.style}>
    <Button
      size={props.size}
      icon={props.name}
      backgroundColor="transparent"
      color={props.color}
      onPress={props.pressMethod}
      underlayColor="transparent"
    />
  </View>
);
IconButton.defaultProps = {
  color: colors.primary,
  size: 30
};
export default IconButton;
