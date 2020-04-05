import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { colors } from "#constants";
//

const Layout = props => {
  return <SafeAreaView style={{ ...style.layoutWrapper }}>{props.children}</SafeAreaView>;
};

const style = StyleSheet.create({
  layoutWrapper: {
    flex: 1,
    backgroundColor: colors.layoutBackground
  }
});

export default Layout;
