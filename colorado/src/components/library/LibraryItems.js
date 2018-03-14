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
import Swipeout from "react-native-swipeout";
import rgbHex from "rgb-hex";
import styles from "../../Styles";

const { width, height } = Dimensions.get("window");

export default class LibraryItems extends Component {
	constructor() {
		super();
		this.state = {
			palette: ""
		};
	}
	swipeoutBtns = [
		{
			text: "Delete",
			underlayColor: "transparent",
			backgroundColor: "#b00",
			type: "primary",
			onPress: () => {
				console.log("weee");
				this.props.deletePalette(this.state);
			}
		}
	];
	librarySwatchHandler = e => {
		console.log("librarySwatchHandler");
		e.preventDefault();
		this.props.libraryModalToggle(this.props.palette);
	};
	deleteHandler = () => {
		console.log("deleteHandler");

		this.props.deletePalette(this.state);
	};
	componentDidMount() {
		this.setState({
			palette: this.props.palette
		});
	}
	render() {
		const palette = this.props.palette;

		const first = "#" + rgbHex(palette.first).substring(0, 6);
		console.log("#" + rgbHex(palette.first).substring(0, 6));
		return (
			<View
				style={{
					marginBottom: 25,
					marginTop: 25,
					borderRadius: 10
				}}
			>
				<Text>{palette.name}</Text>
				<Swipeout
					right={this.swipeoutBtns}
					style={{ backgroundColor: "white" }}
					buttonWidth={100}
					autoClose={true}
				>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={this.librarySwatchHandler}
					>
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
										"#" +
										rgbHex(palette.first).substring(0, 6)
								}}
							/>
							<View
								style={{
									width: width / 7.5,
									height: width / 7.5,
									backgroundColor:
										"#" +
										rgbHex(palette.second).substring(0, 6)
								}}
							/>
							<View
								style={{
									width: width / 7.5,
									height: width / 7.5,
									backgroundColor:
										"#" +
										rgbHex(palette.third).substring(0, 6)
								}}
							/>
							<View
								style={{
									width: width / 7.5,
									height: width / 7.5,
									backgroundColor:
										"#" +
										rgbHex(palette.fourth).substring(0, 6)
								}}
							/>
							<View
								style={{
									width: width / 7.5,
									height: width / 7.5,
									backgroundColor:
										"#" +
										rgbHex(palette.fifth).substring(0, 6)
								}}
							/>
							<View
								style={{
									width: width / 7.5,
									height: width / 7.5,
									backgroundColor:
										"#" +
										rgbHex(palette.sixth).substring(0, 6)
								}}
							/>
						</View>
					</TouchableHighlight>
				</Swipeout>
			</View>
		);
	}
}
