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
import Icon from "react-native-vector-icons/Entypo";

import style from "../../Style";
const { width, height } = Dimensions.get("window");

export default class CameraPunch extends Component {
	render() {
		return (
			<View
				style={{
					height: height / 12,
					backgroundColor: "transparent",
					flexDirection: "row",
					justifyContent: "space-between"
				}}
			>
				<View>
					<Icon.Button
						size={30}
						name="flash"
						backgroundColor="transparent"
						color="#91268d"
					/>
				</View>
				<View>
					<Icon.Button
						size={30}
						name="cloud"
						backgroundColor="transparent"
						color="#91268d"
					/>
				</View>

				<View>
					<Icon.Button
						size={30}
						name="cycle"
						backgroundColor="transparent"
						color="#91268d"
					/>
				</View>
			</View>
		);
	}
}
