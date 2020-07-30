import React from "react";
import style from "../styles";
import PropTypes from "prop-types";
import { View } from "react-native";
import { AnimatedView, Text } from "#containers";

const StudioInstructions = props => (
  <AnimatedView
    shouldLaunch={props.editMode}
    animation={props.sliderOptions}
    style={style.directionsWrapper}
  >
    <View style={style.directionsCard}>
      <Text.Small style={style.directionsLabel}>
        <Text.Small style={style.directionsSpan}>TAP</Text.Small> on a swatch to read swatch strip
        or
      </Text.Small>
      <Text.Small style={style.directionsLabel}>
        <Text.Small style={style.directionsSpan}>PRESS</Text.Small> on a swatch to edit your
        Palette!
      </Text.Small>
    </View>
  </AnimatedView>
);

StudioInstructions.propTypes = {
  sliderOptions: PropTypes.shape({
    starting: PropTypes.number.isRequired,
    ending: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired
  }).isRequired
};

StudioInstructions.defaultProps = {
  editMode: false
};

export default StudioInstructions;
