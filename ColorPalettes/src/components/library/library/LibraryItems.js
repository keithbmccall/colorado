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
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class LibraryItems extends Component {
	swipeoutBtns = [
		{
			text: "Delete",
			underlayColor: "transparent",
			backgroundColor: "#b00",
			type: "primary",
			onPress: () => {
				console.log("weee", this.state);
			}
		}
	];
	renderLibrarySwatches = (swatch, key) => {
		return (
			<View
				key={key}
				style={{
					backgroundColor: swatch,
					width: width / 7,
					height: width / 7
				}}
			/>
		);
	};
	toggleLibraryModalHandler = () => {
		this.props.toggleLibraryModal(this.state.palette);
	};
	componentDidMount() {
		console.log("libraryitem", this.props.palette);
		this.setState({
			palette: this.props.palette
		});
	}
	render() {
		const swatches = this.props.palette.swatches.map(
			this.renderLibrarySwatches
		);
		return (
			<View
				style={{
					marginBottom: 25,
					marginTop: 25,
					borderRadius: 10
				}}
			>
				<View style={{ alignItems: "center" }}>
					<Text style={{ color: "black" }}>
						{this.props.palette.name}
					</Text>
				</View>
				<View style={{ flex: 1, alignItems: "center" }}>
					<Swipeout
						right={this.swipeoutBtns}
						style={{ backgroundColor: "white" }}
						buttonWidth={100}
						autoClose={true}
					>
						<TouchableHighlight
							underlayColor="transparent"
							onPress={this.toggleLibraryModalHandler}
						>
							<View
								style={[
									style.flex1,
									{
										flexDirection: "row"
									}
								]}
							>
								{swatches}
							</View>
						</TouchableHighlight>
					</Swipeout>
				</View>
			</View>
		);
	}
}
