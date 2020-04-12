import React, { Fragment } from "react";

import { View } from "react-native";

const ConditionalWrapper = ({ enable, style, children }) =>
  enable ? <View style={style.wrapper}>{children}</View> : <Fragment>{children}</Fragment>;

export default ConditionalWrapper;
