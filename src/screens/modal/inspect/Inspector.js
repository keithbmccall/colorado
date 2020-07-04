import React from "react";
import { View } from "react-native";
import { getHexInfo } from "#utils";
import { Text } from "#containers";
import style from "./styles";

const Inspector = props => {
  const { params: { color = "#aaaaaa" } = {} } = props;

  const pantoneDetails = getHexInfo(color);
  const { name, pantone, rgb } = pantoneDetails;

  return (
    <View style={{ ...style.inspectorWrapper, backgroundColor: color }}>
      <View style={style.inspectorTextWrapper}>
        <Text.Title style={style.inspectorTextName}>{name}</Text.Title>
        <View style={style.inspectorDetailsWrapper}>
          <Text.SubTitle style={style.inspectorText}>{pantone}</Text.SubTitle>
          <Text.SubTitle style={style.inspectorText}>{color.toUpperCase()}</Text.SubTitle>
          <Text.SubTitle style={style.inspectorText}>{rgb}</Text.SubTitle>
        </View>
      </View>
    </View>
  );
};

export default Inspector;
