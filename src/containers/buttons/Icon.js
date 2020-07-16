import React from "react";
import { View } from "react-native";
import { IconButton as Button } from "react-native-paper";
import PropTypes from "prop-types";
import { colors } from "#styles";

const Icon = ({ style, size, name, onPress, color }) => (
  <View style={style}>
    <Button size={size} icon={name} color={color} onPress={onPress} />
  </View>
);

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.string
};

Icon.defaultProps = {
  color: colors.primary,
  size: 30,
  onPress: () => {}
};

Icon.enum = {
  backArrow: "arrow-left-bold",
  edit: "pencil-box-outline"
};

export default Icon;
