import React, { memo } from "react";
import Inspector from "#containers/inspector/Inspector";
import PropTypes from "prop-types";
import { defaultParams } from "#navigation/enum";
import { View } from "react-native";

const InspectorScreen = props => {
  const {
    params: { swatch }
  } = props;

  return (
    <View>
      <Inspector swatch={swatch} />
    </View>
  );
};

InspectorScreen.propTypes = {
  params: PropTypes.shape({
    swatch: PropTypes.object
  })
};

InspectorScreen.defaultProps = {
  params: defaultParams
};

export default memo(InspectorScreen);
