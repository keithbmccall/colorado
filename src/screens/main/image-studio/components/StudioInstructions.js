import React from "react";
import style from "../styles";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { AnimatedView } from "#containers";

const StudioInstructions = props => (
  <AnimatedView
    shouldLaunch={props.editMode}
    animation={props.sliderOptions}
    style={style.directionsWrapper}
  >
    <View style={style.directionsCard}>
      <Text style={style.directionsLabel}>
        <Text style={style.directionsSpan}>TAP</Text> on a swatch to read swatch strip or
      </Text>
      <Text style={style.directionsLabel}>
        <Text style={style.directionsSpan}>PRESS</Text> on a swatch to edit your Palette!
      </Text>
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
