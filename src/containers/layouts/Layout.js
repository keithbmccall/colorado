import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./styles";
import PropTypes from "prop-types";
//

const Layout = props => {
  return <SafeAreaView style={{ ...style.layoutWrapper }}>{props.children}</SafeAreaView>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
