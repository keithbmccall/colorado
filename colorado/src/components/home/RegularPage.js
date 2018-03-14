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
		this.setState({
			bigColor: randomColor,
			bigColorLoaded: true,
			bigBackgroundColor: `rgb(${r / 2},${g / 2},${b / 2})`,
			bigColorHex: `#${rgbHex(randomColor)}`
		});
	}
	componentDidMount() {
		this.generateBigColor();
	}
	render() {
		if (this.state.bigColorLoaded) {
			return (
				<View style={styles.homeScreen}>
					<HomeNav />
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
								backgroundColor: this.state.bigColor,
								width: "100%"
							}}
						>
							<View style={{ flex: 1, alignItems: "center" }}>
								<Text>{this.state.bigColorHex}</Text>
								<View
									style={{
										width: "86%",
										height: 300,
										marginBottom: 50,
										backgroundColor: this.state
											.bigBackgroundColor,
										borderRadius: 10
									}}
								/>
							</View>
							<View style={{ flex: 1, alignItems: "center" }}>
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
			<View>
				<Text>LOADING</Text>
			</View>
		);
	}
}
