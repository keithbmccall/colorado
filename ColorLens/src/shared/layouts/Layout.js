import React from "react";
import { View } from "react-native";

const Layout = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingBottom: 30
      }}
    >
      {props.children}
    </View>
  );
};
export default Layout;
