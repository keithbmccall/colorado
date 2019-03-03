import React, { Fragment } from "react";
import { ScrollView, FlatList, StyleSheet, View } from "react-native";

const ScrollableList = props => {
  if (props.lazy === true) {
    return (
      <FlatList
        data={props.children}
        numColumns={3}
        contentContainerStyle={style.flatListContainer}
        renderItem={({ item }) => <Fragment>{item}</Fragment>}
      />
    );
  }
  return <ScrollView contentContainerStyle={style.scrollViewContainer}>{props.children}</ScrollView>;
};

const style = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    borderWidth: 10,
    borderColor: "#000",
    borderStyle: "solid",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  flatListContainer: {
    flex: 1,
    borderWidth: 10,
    borderColor: "#000",
    borderStyle: "solid"
  }
});
export default ScrollableList;
