import React from "react";
import { Text as _Text } from "react-native";
import PropTypes from "prop-types";
import defaultStyle from "./styles";

export const BaseText = ({ style, children, centered }) => {
  const _centered = centered ? defaultStyle.centered : {};
  return <_Text style={{ ...style, ..._centered }}>{children} </_Text>;
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

const Text = {
  Title,
  SubTitle,
  Sentence,
  Small
};
export default Text;
