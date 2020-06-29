import React from "react";
import { View, Text } from "react-native";
import { getHexInfo } from "#utils";
import style from "./styles";

const Inspector = props => {
  const { params: { color = "#aaaaaa" } = {} } = props;

  const pantoneDetails = getHexInfo(color);
  const { name, pantone, rgb } = pantoneDetails;

  return (
    <View style={{ ...style.inspectorWrapper, backgroundColor: color }}>
      <View style={style.inspectorTextWrapper}>
        <Text style={style.inspectorTextName}>{name}</Text>
        <Text style={style.inspectorText}>{pantone}</Text>
        <Text style={style.inspectorText}>{color.toUpperCase()}</Text>
        <Text style={style.inspectorText}>{rgb}</Text>
      </View>
    </View>
  );
};

export default Inspector;
