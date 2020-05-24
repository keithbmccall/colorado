import React, { Fragment } from "react";
import { FlatList, StyleSheet } from "react-native";

const ScrollableList = props => (
  <FlatList
    key={props.columns === 2 ? 2 : 3}
    data={props.children}
    numColumns={props.columns}
    contentContainerStyle={{ ...style.flatListContainer, ...props.style }}
    renderItem={({ item }) => <Fragment>{item}</Fragment>}
  />
);

ScrollableList.defaultProps = { isLazy: false };

//PROPTYPES

export default ScrollableList;

//
const style = StyleSheet.create({
  scrollViewContainer: {
    borderWidth: 10,
    borderColor: "#000",
    borderStyle: "solid",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  flatListContainer: {
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderColor: "#fff",
    // borderStyle: "solid"
  }
});
