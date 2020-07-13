import React, { memo } from "react";
import { Inspector } from "#containers";
import PropTypes from "prop-types";

const InspectorScreen = props => {
  const { params: { color = "#aaaaaa" } = {} } = props;

  return <Inspector color={color} />;
};

InspectorScreen.propTypes = {
  params: PropTypes.shape({
    color: PropTypes.string
  })
};

export default memo(InspectorScreen);
