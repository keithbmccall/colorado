import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "#containers/text";
import PropTypes from "prop-types";
import defaultStyle from "./styles";

const Full = props => (
  <TouchableOpacity onPress={props.onPress} style={{ ...defaultStyle.full, ...props.style }}>
    {props.label && <Text.Sentence style={{ ...props.textStyle }}>{props.label}</Text.Sentence>}
  </TouchableOpacity>
);

Full.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  label: PropTypes.string
};

Full.defaultProps = {
  onPress: () => {},
  textStyle: {},
  style: {}
};

export default Full;
