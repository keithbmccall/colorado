import React from "react";
import { Image } from "react-native";

const ResponsiveImage = props => {
  return <Image src={props.uri} resizeMethod="resize" />;
};

export default ResponsiveImage;
