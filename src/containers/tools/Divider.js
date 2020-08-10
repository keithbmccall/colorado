import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { colors } from "#styles";

const Divider = ({ width, color }) => <View style={{ borderWidth: width, borderColor: color }} />;

Divider.propType = {
  width: PropTypes.number,
  color: PropTypes.string
};

Divider.defaultProps = {
  width: 0.5,
  color: colors.secondary
};

export default Divider;
