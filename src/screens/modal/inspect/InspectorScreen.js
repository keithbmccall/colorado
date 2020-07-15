import React, { memo } from "react";
import Inspector from "#containers/inspector/Inspector";
import PropTypes from "prop-types";

const InspectorScreen = props => {
  const { params: { swatch = { hex: "#aaaaaa" } } = {} } = props;

  return <Inspector swatch={swatch} />;
};

InspectorScreen.propTypes = {
  params: PropTypes.shape({
    color: PropTypes.string
  })
};

export default memo(InspectorScreen);
