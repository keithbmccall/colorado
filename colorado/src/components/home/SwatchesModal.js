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
import Icon from "react-native-vector-icons/Entypo";

import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import rgbHex from "rgb-hex";
import ColorHelper from "color-to-name";
import Spinner from "react-native-spinkit";

import styles from "../../Styles";

let hex = "#777";
export default class SwatchesModal extends Component {
	constructor() {
		super();
		this.state = {
			bigSwatch: hex
		};
		this.renderSwatches = this.renderSwatches.bind(this);
	}
	//

	renderSwatches(swatch, key) {
		console.log("renderSwatches", swatch.color);
		if (key === 0) {
			hex = "#" + rgbHex(swatch.color).substring(0, 6);
		}
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
	render() {
		let swatches;
		//LOADING FOR SWATCHES MODAL START
		if (this.props.swatchesLoaded) {
			swatches = this.props.currentSwatches
				.slice(0, 6)
				.map(this.renderSwatches);
			return (
				<View style={styles.photosModal}>
					<View
						style={{
							flexDirection: "row"
						}}
					>
						<Icon.Button
							size={25}
							name="circle-with-cross"
							backgroundColor="transparent"
							color="#91268d"
							onPress={this.props.resetSwatchState}
						/>
					</View>
					<View style={styles.swatchContainer}>{swatches}</View>
					<View
						style={{
							flex: 6,
							backgroundColor: hex
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
							<View
								style={{
									position: "absolute",
									right: "1%"
								}}
							>
								<Icon.Button
									name="save"
									backgroundColor="transparent"
									color="#91268d"
									onPress={this.props.saveModalToggle}
								/>
							</View>
						</View>
					</View>
				</View>
			);
		} else {
			swatches = <Text>SWATCHES LOADING</Text>;
		}
		//LOADING FOR SWATCHES MODAL END
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
					size={100}
					type="9CubeGrid"
				/>
			</View>
		);
	}
}
