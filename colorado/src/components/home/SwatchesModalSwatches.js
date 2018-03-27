import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll,
	TouchableHighlight,
	StatusBar,
	Dimensions,
	Modal,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableOpacity
} from "react-native";
//
import ColorHelper from "color-to-name";
import rgbHex from "rgb-hex";

//
import styles from "../../Styles";

export default class SwatchesModalSwatches extends Component {
	render() {
		const { swatch } = this.props;
		return (
			<TouchableHighlight style={{ flex: 1 }} underlayColor="transparent">
				<View
					style={{
						width: "100%",
						height: "100%",
						backgroundColor: swatch.color,
						paddingLeft: 20,
						justifyContent: "center"
					}}
				>
					<Text
						style={{ color: swatch.titleTextColor, fontSize: 11 }}
					>
						HEX:{" "}
						{"#" +
							rgbHex(swatch.color)
								.substring(0, 6)
								.toUpperCase()}
					</Text>
					<Text
						style={{ color: swatch.titleTextColor, fontSize: 11 }}
					>
						RGB:
						{ColorHelper.hexToRGB(
							"#" + rgbHex(swatch.color).substring(0, 6)
						).r + " "}
						{ColorHelper.hexToRGB(
							"#" + rgbHex(swatch.color).substring(0, 6)
						).g + " "}
						{
							ColorHelper.hexToRGB(
								"#" + rgbHex(swatch.color).substring(0, 6)
							).b
						}
					</Text>
				</View>
			</TouchableHighlight>
		);
	}
}
