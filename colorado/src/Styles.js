import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  homeScreen: {
    flex: 1
  },
  navContainer: {
    backgroundColor: "pink",
    flex: 1
  },
  navItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  navRow: {
    flex: 1,
    flexDirection: "row"
  },
  navStatus: {
    backgroundColor: "rgba(0,0,0,0)",
    height: 20
  },
  cameraRoll: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});
