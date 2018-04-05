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

export default class CameraPunch extends Component {
	render() {
		return (
			<View
				style={{
					flex: 3,
					justifyContent: "space-evenly",
					alignItems: "center",
					flexDirection: "row",
					backgroundColor: "rgba(255,255,255,0)"
				}}
			>
				<View underlayColor="transparent">
					<Icon.Button
						size={40}
						name="md-images"
						backgroundColor="transparent"
						color="#91268d"
						onPress={this.props.getCameraRoll}
					/>
				</View>
				<TouchableOpacity
					underlayColor="transparent"
					style={{
						backgroundColor: "#91268d",
						height: 80,
						width: 80,
						borderRadius: 80
					}}
					onPress={this.props.takePicture}
				/>
				<View underlayColor="transparent">
					<Icon.Button
						size={40}
						name="md-color-palette"
						backgroundColor="transparent"
						color="#91268d"
						onPress={() => console.log("palette")}
					/>
				</View>
			</View>
		);
	}
}
