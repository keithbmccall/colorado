import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { getHexInfo } from "#utils/swatch.util";
import Text from "#containers/text";
import defaultStyle from "./styles";
import invert from "invert-color";
import { fallbackSwatch } from "#enum/colors.enum";

const Inspector = props => {
  const { swatch, textStyle, wrapperStyle, titleStyle } = props;

  const colorDetails = useMemo(() => {
    if (swatch.pantone) {
      return swatch;
    }

    return {
      ...getHexInfo(swatch.hex),
      inverted: { color: invert(swatch.hex) }
    };
  }, [swatch]);

  const { name, pantone, rgb, inverted } = colorDetails;

  const swatchDetails = [pantone, swatch.hex, rgb].map((_color, i) => {
    return (
      <Text.SubTitle style={{ ...defaultStyle.inspectorText, ...textStyle, ...inverted }} key={i}>
        {_color.toUpperCase()}
      </Text.SubTitle>
    );
  });

  return (
    <View
      style={{ ...defaultStyle.inspectorWrapper, backgroundColor: swatch.hex, ...wrapperStyle }}
    >
      <View style={defaultStyle.inspectorTextWrapper}>
        <Text.Title style={{ ...defaultStyle.inspectorTextName, ...titleStyle, ...inverted }}>
          {name}
        </Text.Title>
        <View style={defaultStyle.inspectorDetailsWrapper}>{swatchDetails}</View>
      </View>
    </View>
  );
};

Inspector.defaultProps = {
  swatch: fallbackSwatch,
  textStyle: {},
  wrapperStyle: {},
  titleStyle: {}
};

Inspector.propTypes = {
  swatch: PropTypes.object.isRequired,
  textStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  titleStyle: PropTypes.object
};

export default memo(Inspector);
