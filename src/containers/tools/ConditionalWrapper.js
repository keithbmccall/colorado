import React, { Fragment } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const ConditionalWrapper = ({ enable, style, children }) =>
  enable ? <View style={style}>{children}</View> : <Fragment>{children}</Fragment>;

ConditionalWrapper.propType = {
  enable: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

ConditionalWrapper.defaultProps = {
  enable: false
};

export default ConditionalWrapper;
