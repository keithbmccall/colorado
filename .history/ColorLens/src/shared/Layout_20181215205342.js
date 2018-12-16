import React from "react";
import { View } from "react-native";

class Layout extends React.Component {
  
  render(){
    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40
      }}
    >
      {this.props.children}
    </View>
  );}
};
export default Layout;
