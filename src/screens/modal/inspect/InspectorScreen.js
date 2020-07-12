import React, { memo } from "react";
import { View } from "react-native";
import { getHexInfo } from "#utils";
import { Text } from "#containers";
import style from "./styles";

const InspectorScreen = props => {
  const { params: { color = "#aaaaaa" } = {} } = props;

  const pantoneDetails = getHexInfo(color);
  const { name, pantone, rgb } = pantoneDetails;

  const swatchDetails = [pantone, color, rgb].map((color, i) => {
    return (
      <Text.SubTitle style={style.inspectorText} key={i}>
        {color.toUpperCase()}
      </Text.SubTitle>
    );
  });

  return (
    <View style={{ ...style.inspectorWrapper, backgroundColor: color }}>
      <View style={style.inspectorTextWrapper}>
        <Text.Title style={style.inspectorTextName}>{name}</Text.Title>
        <View style={style.inspectorDetailsWrapper}>{swatchDetails}</View>
      </View>
    </View>
  );
};

export default memo(InspectorScreen);
