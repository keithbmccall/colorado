import React from "react";
import { View } from "react-native";
import style from "./styles";
//
const Layout = props => {
  return <View style={style.layoutWrapper}>{props.children}</View>;
};
export default Layout;
