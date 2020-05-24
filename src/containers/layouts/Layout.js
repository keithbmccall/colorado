import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./styles";
//

const Layout = props => {
  return <SafeAreaView style={{ ...style.layoutWrapper }}>{props.children}</SafeAreaView>;
};

export default Layout;
