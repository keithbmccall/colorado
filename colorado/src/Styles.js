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
    backgroundColor: "white",
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey"
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
  //photosPages
  cameraRollContainer: {
    flex: 9,
    backgroundColor: "#ddd",
    paddingTop: 2
  },
  cameraRoll: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  photosModal: {
    paddingTop: 20,
    flex: 1
  },
  //
  swatchContainer: {
    flex: 6,
    backgroundColor: "purple",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  savePaletteModal: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  //camera
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  //general
  text: {
    fontFamily: "HelveticaNeue-Medium",
    fontSize: 16,
    marginBottom: 8
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold"
  }
});
