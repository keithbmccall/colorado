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
	StatusBar,
	TextInput,
	Keyboard
} from "react-native";
import style from "../../../Style";
import Icon from "react-native-vector-icons/Ionicons";
import ColorHelper from "color-to-name";
import pant from "nearest-pantone";
import invert from "invert-color";

const { width, height } = Dimensions.get("window");

export default class InspectSwatchModal extends Component {
	render() {
		const { currentInspectSwatch, toggleSwatchInspectModal } = this.props;
		const swatch = currentInspectSwatch;
		return (
			<View style={{ flex: 1, backgroundColor: "#ddd" }}>
				<StatusBar barStyle="dark-content" hidden={false} />
				<View style={style.statusPadding} />
				<View style={{ flex: 8, backgroundColor: swatch }}>
					<View
						style={{
							height: height / 10,
							backgroundColor: "#ddd",
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
							borderBottomColor: "#ccc",
							borderBottomWidth: 1
						}}
					>
						<View
							style={{
								flex: 1,
								alignItems: "flex-start",
								flexDirection: "row",
								justifyContent: "center"
							}}
						/>
						<View>
							<Icon.Button
								size={40}
								name="md-close-circle"
								backgroundColor="transparent"
								color="#91268d"
								onPress={toggleSwatchInspectModal}
								underlayColor="transparent"
							/>
						</View>
					</View>
					<View style={{ marginTop: 50, marginLeft: 30 }}>
						<Text
							style={{
								fontSize: 19,
								color: invert(swatch, true)
							}}
						>
							{pant.getClosestColor(swatch)
								? pant
										.getClosestColor(swatch)
										.name.toUpperCase()
								: "BLACK"}
						</Text>
						<Text
							style={{
								fontSize: 19,
								color: invert(swatch, true)
							}}
						>
							{swatch.toUpperCase()}
						</Text>
						<Text
							style={{
								fontSize: 19,
								color: invert(swatch, true)
							}}
						>{`R: ${ColorHelper.hexToRGB(swatch).r} G: ${
							ColorHelper.hexToRGB(swatch).g
						} B: ${ColorHelper.hexToRGB(swatch).b}`}</Text>
						<Text
							style={{
								fontSize: 19,
								color: invert(swatch, true)
							}}
						>
							{pant.getClosestColor(swatch)
								? `PANTONE\xAE ${
										pant.getClosestColor(swatch).pantone
								  }`
								: "No Pantone"}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
