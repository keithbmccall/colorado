import React from "react";
import { Text as RNText } from "react-native";
import PropTypes from "prop-types";
import defaultStyle from "./styles";

export const BaseText = ({ style, children, centered }) => (
  <RNText style={{ ...style, ...(centered ? defaultStyle.centered : {}) }}>{children} </RNText>
);

BaseText.propTypes = {
  style: PropTypes.object,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired
};

BaseText.defaultProps = {
  centered: false
};

export const Title = ({ style, children, centered }) => (
  <BaseText style={{ ...defaultStyle.title, ...style }} centered={centered}>
    {children}
  </BaseText>
);

export const SubTitle = ({ style, children, centered }) => (
  <BaseText style={{ ...defaultStyle.subtitle, ...style }} centered={centered}>
    {children}
  </BaseText>
);

export const Sentence = ({ style, children, centered }) => (
  <BaseText style={{ ...defaultStyle.sentence, ...style }} centered={centered}>
    {children}
  </BaseText>
);

export const Small = ({ style, children, centered }) => (
  <BaseText style={{ ...defaultStyle.small, ...style }} centered={centered}>
    {children}
  </BaseText>
);

const Text = {
  Title,
  SubTitle,
  Sentence,
  Small
};

export default Text;
