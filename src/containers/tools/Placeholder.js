import { colors } from "#styles";
import Text from "#containers/text";
import React from "react";

const Placeholder = props => (
  <Text.Sentence style={{ color: colors.transparent }}>{props.text}</Text.Sentence>
);

Placeholder.defaultProps = {
  text: "NOOP"
};

export default Placeholder;
