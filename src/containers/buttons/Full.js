import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "#containers";

const Full = props => (
  <TouchableOpacity
    onPress={props.pressMethod}
    style={{ ...props.style, justifyContent: "center", alignItems: "center", flex: 1 }}
  >
    {props.innerText && (
      <Text.Sentence style={{ ...props.textStyle }}>{props.innerText}</Text.Sentence>
    )}
  </TouchableOpacity>
);

export default Full;
