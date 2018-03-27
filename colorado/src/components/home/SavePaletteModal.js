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
import Icon from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

export default class SavePaletteModal extends Component {
	constructor() {
		super();
		this.state = {
			paletteName: "",
			currentSwatches: ""
		};
	}
	placeSwatches = (swatch, key) => {
		return (
			<View
				key={key}
				style={{
					width: width / 3,
					height: width / 3,
					backgroundColor: swatch.color
				}}
			/>
		);
	};

	savePaletteHandler = e => {
		e.preventDefault();
		Keyboard.dismiss;
		this.props.savePalette(this.state);
		this.props.navigate("Library");
		this.props.saveModalClose();
		this.props.resetSwatchModal();
	};
	componentDidMount() {
		this.setState({
			currentSwatches: this.props.currentSwatches.slice(0, 6)
		});
	}
	render() {
		const swatches = [];
		for (let i = 0; i < 27; i++) {
			swatches.push(
				this.props.currentSwatches.slice(0, 6).map(this.placeSwatches)
			);
		}
		return (
			<View style={styles.savePaletteModal}>
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
						onPress={this.props.saveModalToggle}
					/>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap",
						flexDirection: "row"
					}}
				>
					{swatches}

					<View
						style={{
							position: "absolute",
							top: height / 3,
							center: width / 2,
							alignItems: "center"
						}}
					>
						<Text style={[styles.textHeader, { color: "white" }]}>
							Save Palette
						</Text>
						<TextInput
							placeholder="Name your palette..."
							style={{
								height: 40,
								width: 200,
								borderColor: "gray",
								borderWidth: 1,
								paddingLeft: 5,
								marginTop: 20,
								backgroundColor: "white",
								textAlign: "center",
								borderRadius: 10
							}}
							keyboardType="default"
							keyboardAppearance="dark"
							returnKeyType="done"
							autoCorrect={false}
							onChangeText={paletteName =>
								this.setState({ paletteName })
							}
							value={this.state.name}
							onSubmitEditing={this.savePaletteHandler}
						/>
					</View>
				</View>
			</View>
		);
	}
}
