import React, { Fragment } from "react";
import { ScrollView, FlatList, StyleSheet } from "react-native";

const ScrollableList = props => {
  if (props.lazy === true) {
    return (
      <FlatList
        data={props.children}
        numColumns={props.columns}
        contentContainerStyle={style.flatListContainer}
        renderItem={({ item }) => <Fragment>{item}</Fragment>}
      />
    );
  }
  return <ScrollView contentContainerStyle={style.scrollViewContainer}>{props.children}</ScrollView>;
};

const style = StyleSheet.create({
  scrollViewContainer: {
    borderWidth: 10,
    borderColor: "#000",
    borderStyle: "solid",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  flatListContainer: {
    borderTopWidth: 2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor: "#fff",
    borderStyle: "solid"
  }
});
export default ScrollableList;
