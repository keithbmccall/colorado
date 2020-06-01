import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import defaultStyle from "./styles";

const BottomButtonBar = props => {
  const { style, label, onPress, labelStyle } = props;

  return (
    <TouchableOpacity onPress={onPress} style={{ ...defaultStyle.bottomButtonBar, ...style }}>
      <Text style={{ ...defaultStyle.label, ...labelStyle }}>{label}</Text>
    </TouchableOpacity>
  );
};

BottomButtonBar.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  onPress: PropTypes.func
};

BottomButtonBar.defaultProps = {
  label: "ThisButtonHasNoLabel",
  onPress: () => {}
};
export default BottomButtonBar;
