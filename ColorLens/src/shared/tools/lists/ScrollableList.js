import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ScrollView, FlatList, StyleSheet } from "react-native";

// FLATLIST
const renderFlatList = props => (
  <FlatList
    data={props.children}
    numColumns={props.columns}
    contentContainerStyle={style.flatListContainer}
    renderItem={({ item }) => <Fragment>{item}</Fragment>}
  />
);

// SCROLLVIEW
const renderScrollView = props => (
  <ScrollView contentContainerStyle={style.scrollViewContainer}>{props.children}</ScrollView>
);

//
const ScrollableList = props => (props.isLazy === true ? renderFlatList(props) : renderScrollView(props));

ScrollableList.defaultProps = { isLazy: false };

//PROPTYPES
ScrollableList.propTypes = {
  isLazy: PropTypes.bool,
  columns: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
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
