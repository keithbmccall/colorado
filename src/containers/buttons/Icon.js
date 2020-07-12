import React from "react";
import { View } from "react-native";
import { IconButton as Button } from "react-native-paper";
import PropTypes from "prop-types";
import { colors } from "#styles";

const Icon = ({ style, size, name, onPress }) => (
  <View style={style}>
    <Button size={size} icon={name} color={"white"} onPress={onPress} />
  </View>
);

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object
};

Icon.defaultProps = {
  color: colors.primary,
  size: 30,
  onPress: () => {}
};

export default Icon;
