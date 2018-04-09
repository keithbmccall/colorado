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
	Modal,
	StatusBar
} from "react-native";

import Spinner from "react-native-spinkit";
import style from "./Style";

export default class Loading extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#fff"
				}}
			>
				<Spinner
					isVisible={true}
					color="#91268d"
					size={75}
					type="9CubeGrid"
				/>
			</View>
		);
	}
}
