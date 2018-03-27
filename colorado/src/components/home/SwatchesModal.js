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
import Icon from "react-native-vector-icons/Entypo";
import SwatchesModalSwatches from "./SwatchesModalSwatches";

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
		return <SwatchesModalSwatches key={key} swatch={swatch} />;
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
					<TouchableOpacity
						activeOpacity={1}
						onPressIn={e =>
							this.props.selectSwatch(e, this.props.currentImage)
						}
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
					</TouchableOpacity>

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
