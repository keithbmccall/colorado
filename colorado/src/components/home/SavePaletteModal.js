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
					width: width / 9,
					height: width / 9,
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
		for (let i = 0; i < 26; i++) {
			swatches.push(
				this.props.currentSwatches.slice(0, 6).map(this.placeSwatches)
			);
		}
		return (
			<View style={styles.savePaletteModal}>
				<Button title="Cancel" onPress={this.props.saveModalToggle} />

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
						<Text>Save Palette</Text>
						<TextInput
							placeholder="name"
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
							autoCorrect="false"
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
