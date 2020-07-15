import React, { useEffect } from "react";
import Router from "#navigation/Router";
import { setGlobalHandler } from "#utils/errors.util";

console.disableYellowBox = true;

const Root = () => {
  useEffect(() => {
    setGlobalHandler();
  });

  return <Router />;
};

export default Root;
