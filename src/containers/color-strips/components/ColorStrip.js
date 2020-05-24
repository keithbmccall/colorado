import React from "react";
import { View } from "react-native";
import style from "../styles";
import { mapSwatchPaletteToArray } from "#utils";
import ConditionalButton from "../../tools/ConditionalButton";
import { swatchDictionaryEnum } from "#enum";

const renderSwatches = ({ onPress, onLongPress, swatches }) =>
  mapSwatchPaletteToArray(swatches).map((swatch, key) => {
    const _key = swatchDictionaryEnum[key];
    return (
      <ConditionalButton
        style={style.flex1}
        onPress={onPress && onPress.bind(null, swatch, _key)}
        onLongPress={onLongPress && onLongPress.bind(null, swatch, _key)}
        key={`${key}_${swatch}`}
      >
        <View style={[style.flex1, { backgroundColor: swatch }]} key={key} />
      </ConditionalButton>
    );
  });

const ColorStrip = props => {
  return <View style={props.style}>{renderSwatches(props)}</View>;
};

ColorStrip.defaultProps = {
  style: style.colorStripWrapper,
  onPress: null,
  onLongPress: null,
  isStudio: false
};

export default ColorStrip;
