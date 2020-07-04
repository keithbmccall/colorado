import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Text } from "#containers";
import defaultStyle from "./styles";

const BottomButtonBar = props => {
  const { style, label, onPress, labelStyle } = props;

  return (
    <TouchableOpacity onPress={onPress} style={{ ...defaultStyle.bottomButtonBar, ...style }}>
      <Text.Sentence style={{ ...labelStyle }}>{label}</Text.Sentence>
    </TouchableOpacity>
  );
};

BottomButtonBar.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  onPress: PropTypes.func
};

BottomButtonBar.defaultProps = {
  label: "__ThisButtonHasNoLabel!__",
  onPress: () => {}
};
export default BottomButtonBar;
