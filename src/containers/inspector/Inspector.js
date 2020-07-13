import React, { memo } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { getHexInfo } from "#utils";
import { Text } from "#containers";
import defaultStyle from "./styles";

const Inspector = props => {
  const { color, textStyle, wrapperStyle, titleStyle } = props;

  const pantoneDetails = getHexInfo(color);
  const { name, pantone, rgb } = pantoneDetails;

  const swatchDetails = [pantone, color, rgb].map((color, i) => {
    return (
      <Text.SubTitle style={{ ...defaultStyle.inspectorText, ...textStyle }} key={i}>
        {color.toUpperCase()}
      </Text.SubTitle>
    );
  });

  return (
    <View style={{ ...defaultStyle.inspectorWrapper, backgroundColor: color, ...wrapperStyle }}>
      <View style={defaultStyle.inspectorTextWrapper}>
        <Text.Title style={{ ...defaultStyle.inspectorTextName, ...titleStyle }}>{name}</Text.Title>
        <View style={defaultStyle.inspectorDetailsWrapper}>{swatchDetails}</View>
      </View>
    </View>
  );
};

Inspector.defaultProps = {
  color: "#aaaaaa",
  textStyle: {},
  wrapperStyle: {},
  titleStyle: {}
};

Inspector.propTypes = {
  color: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  titleStyle: PropTypes.object
};

export default memo(Inspector);
