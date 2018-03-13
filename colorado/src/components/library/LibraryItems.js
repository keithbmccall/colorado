import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	Dimensions,
	TouchableHighlight
} from "react-native";
import rgbHex from "rgb-hex";
import styles from "../../Styles";

const { width, height } = Dimensions.get("window");

export default class LibraryItems extends Component {
	constructor() {
		super();

		this.librarySwatchHandler = this.librarySwatchHandler.bind(this);
	}
	librarySwatchHandler(e) {
		e.preventDefault();
		this.props.libraryModalToggle(this.props.palette);
	}
	render() {
		const palette = this.props.palette;
		const first = "#" + rgbHex(palette.first).substring(0, 6);
		console.log("#" + rgbHex(palette.first).substring(0, 6));
		return (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={this.librarySwatchHandler}
			>
				<View
					style={{
						marginBottom: 25,
						marginTop: 25,
						borderRadius: 10
					}}
				>
					<Text>{palette.name}</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row"
						}}
					>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.first).substring(0, 6)
							}}
						/>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.second).substring(0, 6)
							}}
						/>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.third).substring(0, 6)
							}}
						/>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.fourth).substring(0, 6)
							}}
						/>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.fifth).substring(0, 6)
							}}
						/>
						<View
							style={{
								width: width / 7.5,
								height: width / 7.5,
								backgroundColor:
									"#" + rgbHex(palette.sixth).substring(0, 6)
							}}
						/>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}
