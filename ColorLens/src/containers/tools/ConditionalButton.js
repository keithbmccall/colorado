import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native";

const ConditionalButton = ({ onPress = null, onLongPress = null, style = {}, children }) => {
  const enable = onPress || onLongPress;
  return enable ? (
    <TouchableOpacity style={style} onPress={onPress} onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default ConditionalButton;
