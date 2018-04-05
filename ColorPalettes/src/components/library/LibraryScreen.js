import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	TouchableOpacity,
	CameraRoll,
	TouchableHighlight,
	Dimensions,
	Modal
} from "react-native";

import style from "../../Style";

export default class Library extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					backgroundColor: "#ccc"
				}}
			>
				<View style={style.statusPadding} />
				<View>
					<Text>LIBRARY</Text>
				</View>
			</View>
		);
	}
}
