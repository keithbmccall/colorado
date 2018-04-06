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
//
import Icon from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-spinkit";
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class InspectImage extends Component {
	render() {
		if (this.props.currentImageMounted) {
			return (
				<View style={{ flex: 1, backgroundColor: "black" }}>
					<StatusBar barStyle="light-content" hidden={false} />
					<View style={style.statusPadding} />
					<View style={{ flex: 8, backgroundColor: "black" }}>
						<View
							style={{
								height: height / 12,
								backgroundColor: "black",
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
									onPress={this.props.toggleInspectModal}
									underlayColor="transparent"
								/>
							</View>
						</View>
						<Image
							style={{
								flex: 1,
								resizeMode: "contain"
							}}
							source={{
								uri: this.props.currentImage
							}}
						/>
					</View>
					<View
						style={{
							flex: 3,
							justifyContent: "space-evenly",
							alignItems: "center",
							flexDirection: "row",
							backgroundColor: "rgba(255,255,255,0)"
						}}
					>
						k
					</View>
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
