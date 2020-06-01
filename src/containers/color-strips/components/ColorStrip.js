import React, { memo } from "react";
import { View } from "react-native";
import { globalStyle } from "#styles";
import defaultStyle from "../styles";
import PropTypes from "prop-types";
import { mapSwatchPaletteToArray } from "#utils";
import ConditionalButton from "../../tools/ConditionalButton";
import { swatchDictionaryEnum } from "#enum";

const ColorStrip = props => {
  const { onPress, onLongPress, swatches, isStudio, style } = props;

  const renderSwatches = () => {
    return mapSwatchPaletteToArray(swatches).map((swatch, key) => {
      const _key = swatchDictionaryEnum[key];
      return (
        <ConditionalButton
          style={globalStyle.flex1}
          onPress={onPress && onPress.bind(null, swatch, _key)}
          onLongPress={onLongPress && onLongPress.bind(null, swatch, _key)}
          key={`${key}_${swatch}`}
          enable={!isStudio}
        >
          <View style={[globalStyle.flex1, { backgroundColor: swatch }]} key={key} />
        </ConditionalButton>
      );
    });
  };

  return <View style={style}>{renderSwatches()}</View>;
};

ColorStrip.propTypes = {
  style: PropTypes.object,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  isStudio: PropTypes.bool,
  swatches: PropTypes.object.isRequired
};

ColorStrip.defaultProps = {
  style: defaultStyle.colorStripWrapper,
  onPress: null,
  onLongPress: null,
  isStudio: false
};

export default memo(ColorStrip);
