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
					backgroundColor: "#111"
				}}
			>
				<View>
					<Icon.Button
						size={40}
						name="md-images"
						backgroundColor="transparent"
						color="#91268d"
						onPress={this.props.getCameraRoll}
						underlayColor="transparent"
					/>
				</View>
				<TouchableOpacity
					underlayColor="transparent"
					style={{
						borderColor: "#91268d",
						borderWidth: 8,
						height: 80,
						width: 80,
						borderRadius: 80
					}}
					onPress={this.props.takePicture}
				/>
				<View>
					<Icon.Button
						size={40}
						name="md-color-palette"
						backgroundColor="transparent"
						color="#91268d"
						onPress={() => this.props.navigate("Library")}
						underlayColor="black"
					/>
				</View>
			</View>
		);
	}
}
