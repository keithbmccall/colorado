import React from "react";
import { ScrollView, FlatList } from "react-native";

const ScrollableList = props => {
  if (props.type === "lazy") {
    return <FlatList>{props.children}</FlatList>;
  }
  return <ScrollView>{props.children}</ScrollView>;
};

export default ScrollableList;
