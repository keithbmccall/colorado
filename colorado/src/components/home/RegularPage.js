import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll
} from "react-native";
import { TabNavigator } from "react-navigation";
import LibraryPreview from "./LibraryPreview";
import Spinner from "react-native-spinkit";

//

import styles from "../../Styles";
import rgbHex from "rgb-hex";
import Hero from "react-native-hero";

import HomeNav from "./HomeNav";
//

export default class RegularPage extends Component {
	constructor() {
		super();
		this.state = {
			bigColor: "#aaa",
			bigColorLoaded: false,
			bigBackgroundColor: "#aaa",
			bigColorHex: "#aaa"
		};
		this.generateBigColor = this.generateBigColor.bind(this);
	}

	generateBigColor() {
		console.log("big color!");
		let r, g, b, randomColor;
		r = Math.floor(Math.random() * 255);
		g = Math.floor(Math.random() * 255);
		b = Math.floor(Math.random() * 255);
		randomColor = `rgb(${r},${g},${b})`;
		rgbHex(randomColor);
		this.setState(
			{
				bigColor: randomColor,
				bigColorLoaded: true,
				bigBackgroundColor: `rgb(${r / 2},${g / 2},${b / 2})`,
				bigColorHex: `#${rgbHex(randomColor)}`
			},
			this.props.screenProps.bigColorState(
				randomColor,
				`#${rgbHex(randomColor)}`
			)
		);
	}
	componentDidMount() {
		this.generateBigColor();
	}
	render() {
		if (this.state.bigColorLoaded) {
			return (
				<View style={styles.homeScreen}>
					<HomeNav navigate={this.props.navigation.navigate} />

					<View
						style={{
							flex: 9,
							alignItems: "center"
						}}
					>
						<ScrollView
							showsVerticalScrollIndicator={false}
							style={{
								flex: 1,
								backgroundColor: "white",
								width: "100%"
							}}
						>
							<View
								style={{
									flex: 1,
									alignItems: "center",
									marginTop: 30
								}}
							>
								<View style={{ width: "85%" }}>
									<Text style={styles.textHeader}>
										Explore
									</Text>
								</View>
								<Text style={styles.text}>
									{this.state.bigColorHex.toUpperCase()}
								</Text>
								<View
									style={{
										width: "86%",
										height: 300,
										marginTop: 10,
										marginBottom: 50,
										backgroundColor: this.state.bigColor,
										borderRadius: 10
									}}
								/>
							</View>
							<View
								style={{
									flex: 1,
									alignItems: "center",
									marginBottom: 80
								}}
							>
								<LibraryPreview
									palettesLoaded={
										this.props.screenProps.palettesLoaded
									}
									palettes={this.props.screenProps.palettes}
									navigate={this.props.navigation.navigate}
								/>
							</View>
						</ScrollView>
					</View>
				</View>
			);
		}
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
					color={this.state.bigColor}
					size={100}
					type="9CubeGrid"
				/>
			</View>
		);
	}
}
