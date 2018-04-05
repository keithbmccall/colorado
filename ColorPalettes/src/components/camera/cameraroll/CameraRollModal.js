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
import style from "../../../Style";
import Icon from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-spinkit";
//
import CameraRollImages from "./CameraRollImages";

const { width, height } = Dimensions.get("window");

export default class CameraRollModal extends Component {
	renderImages(image, key) {
		return <CameraRollImages key={key} image={image} />;
	}
	render() {
		if (this.props.cameraRollLoaded) {
			const images = this.props.cameraRollImages.map(this.renderImages);
			return (
				<View style={{ flex: 1, backgroundColor: "#ccc" }}>
					<StatusBar hidden={true} />
					<View style={style.statusPadding} />
					<View
						style={{
							height: height / 12,
							backgroundColor: "transparent",
							flexDirection: "row",
							justifyContent: "flex-end"
						}}
					>
						<View>
							<Icon.Button
								size={40}
								name="ios-close-circle"
								backgroundColor="transparent"
								color="#91268d"
								onPress={this.props.toggleCameraRollModal}
								underlayColor="transparent"
							/>
						</View>
					</View>
					<ScrollView contentContainerStyle={style.cameraRoll}>
						{images}
					</ScrollView>
				</View>
			);
		} else {
			return (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center"
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
}
