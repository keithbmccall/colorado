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
	Keyboard
} from "react-native";
import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import rgbHex from "rgb-hex";
import ColorHelper from "color-to-name";
import styles from "../../Styles";

export default class SwatchesModal extends Component {
	constructor() {
		super();
		this.renderSwatches = this.renderSwatches.bind(this);
	}
	renderSwatches(swatch, key) {
		console.log("renderSwatches", swatch);
		return (
			<TouchableHighlight
				style={{ flex: 1 }}
				key={key}
				underlayColor="transparent"
			>
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
						HEX: {"#" + rgbHex(swatch.color).substring(0, 6)}
					</Text>
					<Text
						style={{ color: swatch.titleTextColor, fontSize: 11 }}
					>
						RGB:{" "}
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
	render() {
		let swatches;
		//LOADING FOR SWATCHES MODAL START
		if (this.props.currentSwatches) {
			swatches = this.props.currentSwatches
				.slice(0, 6)
				.map(this.renderSwatches);
			return (
				<View style={styles.photosModal}>
					<Button title="Cancel" onPress={this.resetSwatchState} />
					<View style={styles.swatchContainer}>{swatches}</View>
					<View
						style={{
							flex: 6,
							backgroundColor: "#bbb"
						}}
					>
						<Image
							style={{
								flex: 1,
								resizeMode: "contain"
							}}
							source={{ uri: this.props.currentImage }}
						/>
					</View>
					<View style={{ flex: 1, backgroundColor: "#eee" }}>
						<View style={styles.navRow}>
							<TouchableHighlight
								style={styles.navItemContainer}
								underlayColor="transparent"
								onPress={() => console.log("pressed")}
							>
								<Text>???</Text>
							</TouchableHighlight>
							<TouchableHighlight style={styles.navItemContainer}>
								<Text>Logo</Text>
							</TouchableHighlight>
							<TouchableHighlight
								underlayColor="transparent"
								style={styles.navItemContainer}
								onPress={this.props.saveModalToggle}
							>
								<Text>Save Pallet</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			);
		} else {
			swatches = <Text>SWATCHES LOADING</Text>;
		}
		//LOADING FOR SWATCHES MODAL END
		return (
			<View>
				<Text>laodign</Text>
			</View>
		);
	}
}
