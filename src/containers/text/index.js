import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import defaultStyle from "./styles";

export const BaseText = ({ style, children, centered }) => {
  const _centered = centered ? defaultStyle.centered : {};
  return <Text style={{ ...style, ..._centered }}>{children} </Text>;
};

BaseText.propTypes = {
  style: PropTypes.object,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired
};

BaseText.defaultProps = {
  centered: false
};

export const Title = ({ style, children }) => {
  console.log({ style });
  return <BaseText style={{ ...defaultStyle.title, ...style }}>{children} </BaseText>;
};

export const SubTitle = ({ style, children }) => {
  return <BaseText style={{ ...defaultStyle.subtitle, ...style }}>{children}</BaseText>;
};

export const Sentence = ({ style, children }) => {
  return <BaseText style={{ ...defaultStyle.sentence, ...style }}>{children}</BaseText>;
};

export const Small = ({ style, children }) => {
  return <BaseText style={{ ...defaultStyle.small, ...style }}>{children}</BaseText>;
};

export default Sentence;
