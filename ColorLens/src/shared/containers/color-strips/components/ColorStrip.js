import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";

// const swatchContent = =>
const renderSwatches = props => {
  if (props.clickMethod || props.longPressMethod) {
    return props.swatches.map((swatch, key) => (
      <TouchableOpacity
        underlayColor="transparent"
        style={{ flex: 1 }}
        onPress={props.clickMethod}
        onLongPress={props.longPressMethod}
        key={key}
      >
        <View style={{ flex: 1, backgroundColor: swatch.color }} />
      </TouchableOpacity>
    ));
  }
  return props.swatches.map((swatch, key) => (
    <View style={{ flex: 1, backgroundColor: swatch.color }} key={key} />
  ));
};

const ColorStrip = props => (
  <View style={props.containerStyle}>{renderSwatches(props)}</View>
);

ColorStrip.defaultProps = {
  containerStyle: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "15%",
    width: "100%",
    flexDirection: "row"
  }
};
ColorStrip.propTypes = {
  containerStyle: PropTypes.object,
  clickMethod: PropTypes.func,
  longPressMethod: PropTypes.func,
  swatches: PropTypes.array.isRequired
};

export default ColorStrip;
