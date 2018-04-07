import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";
//
const { width, height } = Dimensions.get("window");
//
//checks if iPhone X
let statusHeight;
height === 812 ? (statusHeight = 40) : (statusHeight = 20);
//
export default StyleSheet.create({
	statusPadding: {
		height: statusHeight
	},
	preview: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center"
	},
	flex1: {
		flex: 1
	},
	cameraRollContainer: {
		flex: 9,
		backgroundColor: "#ddd",
		paddingTop: 2
	},
	cameraRoll: {
		flexWrap: "wrap",
		flexDirection: "row"
	},
	// text
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
