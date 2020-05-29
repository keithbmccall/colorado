import React, { Fragment } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import style from "./styles";

const ScrollableList = props => (
  <FlatList
    key={props.columns === 2 ? 2 : 3}
    data={props.children}
    numColumns={props.columns}
    contentContainerStyle={{ ...style.flatListContainer, ...props.style }}
    renderItem={({ item }) => <Fragment>{item}</Fragment>}
  />
);

ScrollableList.propTypes = {
  isLazy: PropTypes.bool,
  columns: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

ScrollableList.defaultProps = {
  isLazy: false,
  columns: 2,
  style: {}
};

export default ScrollableList;
