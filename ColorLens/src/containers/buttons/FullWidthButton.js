import React from "react";
import { TouchableOpacity, Text } from "react-native";

const FullWidthButton = props => (
  <TouchableOpacity
    onPress={props.pressMethod}
    style={{ ...props.style, justifyContent: "center", alignItems: "center", flex: 1 }}
  >
    {props.innerText && <Text style={{ ...props.textStyle }}>{props.innerText}</Text>}
  </TouchableOpacity>
);

export default FullWidthButton;
