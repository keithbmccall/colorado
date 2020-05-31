import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const ConditionalButton = ({ onPress, onLongPress, style, children }) => {
  const enable = onPress || onLongPress;
  return enable ? (
    <TouchableOpacity style={style} onPress={onPress} onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

ConditionalButton.propTypes = {
  enable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};

ConditionalButton.defaultProps = {
  onPress: null,
  onLongPress: null,
  enable: false
};
export default ConditionalButton;
