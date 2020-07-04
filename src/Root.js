import React, { useEffect } from "react";
import Router from "#navigation";
import { setGlobalHandler } from "#utils";

console.disableYellowBox = true;

const Root = () => {
  useEffect(() => {
    setGlobalHandler();
  });

  return <Router />;
};

export default Root;
