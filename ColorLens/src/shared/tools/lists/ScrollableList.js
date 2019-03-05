import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ScrollView, FlatList} from "react-native";
import style from "./styles";

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
const ScrollableList = props => (props.lazy === true ? renderFlatList(props) : renderScrollView(props));

ScrollableList.defaultProps = { lazy: false };
//PROPTYPES
ScrollableList.propTypes = {
  lazy: PropTypes.bool,
  columns: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
export default ScrollableList;
