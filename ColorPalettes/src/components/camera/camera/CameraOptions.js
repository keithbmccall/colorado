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
import Icon from "react-native-vector-icons/Ionicons";

import style from "../../../Style";
const { width, height } = Dimensions.get("window");

export default class CameraOptions extends Component {
	flashHandler = e => {
		this.props.toggleFlashMode();
	};
	balanceHandler = e => {
		this.props.toggleWhiteBalance();
	};
	typeHandler = e => {
		this.props.toggleCameraType();
	};

	render() {
		return (
			<View
				style={{
					height: height / 10,
					backgroundColor: "transparent",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: "#ddd",
					alignItems: "center"
				}}
			>
				<View>
					<Icon.Button
						size={40}
						name={this.props.iconFlashMode}
						backgroundColor="transparent"
						color="#91268d"
						onPress={this.flashHandler}
						underlayColor="transparent"
					/>
				</View>
				<View>
					<Icon.Button
						size={40}
						name={this.props.iconWhiteBalance}
						backgroundColor="transparent"
						color="#91268d"
						onPress={this.balanceHandler}
						underlayColor="transparent"
					/>
				</View>

				<View>
					<Icon.Button
						size={40}
						name={this.props.iconCameraType}
						backgroundColor="transparent"
						color="#91268d"
						onPress={this.typeHandler}
						underlayColor="transparent"
					/>
				</View>
			</View>
		);
	}
}
