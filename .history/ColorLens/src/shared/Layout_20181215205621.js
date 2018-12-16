import React from "react";
import { View } from "react-native";

const Layout = props => {
  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingTop: 2000,
        
      }}
    >
      {props.children}
    </View>
  );
};
export default Layout;
