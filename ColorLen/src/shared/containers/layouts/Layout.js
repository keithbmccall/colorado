import React from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { colors } from "shared/constants";
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
