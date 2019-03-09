import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import style from "../styles";

const renderSwatchContent = (swatch, key) => (
  <View
    style={[style.flex1, { backgroundColor: swatch.color }]}
    key={key ? key : null}
  />
);
const renderSwatches = props => {
  if (props.clickMethod || props.longPressMethod) {
    return props.swatches.map((swatch, key) => (
      <TouchableOpacity
        underlayColor="transparent"
        style={style.flex1}
        onPress={props.clickMethod}
        onLongPress={props.longPressMethod}
        key={key}
      >
        {renderSwatchContent(swatch)}
      </TouchableOpacity>
    ));
  }
  return props.swatches.map((swatch, key) => renderSwatchContent(swatch, key));
};

const ColorStrip = props => (
  <View style={props.containerStyle}>{renderSwatches(props)}</View>
);

ColorStrip.defaultProps = {
  containerStyle: style.colorStripWrapper
};
ColorStrip.propTypes = {
  containerStyle: PropTypes.object,
  clickMethod: PropTypes.func,
  longPressMethod: PropTypes.func,
  swatches: PropTypes.array.isRequired
};

export default ColorStrip;
