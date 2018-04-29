import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	TouchableOpacity,
	CameraRoll,
	TouchableHighlight,
	Dimensions,
	Modal,
	StatusBar
} from "react-native";

import style from "../../../Style";
import Icon from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");
const standardBoxSize = width / 6;

export default class InspectTools extends Component {
	resetHandler = color => {
		this.props.resetSetColor(color);
	};
	inspectSwatchHandler = color => {
		this.props.toggleSwatchInspectModal(color);
	};
	renderMiniSwatches = (swatch, key) => {
		return (
			<TouchableOpacity
				key={key}
				style={{
					width: standardBoxSize,
					height: standardBoxSize,
					backgroundColor: swatch.color,
					borderWidth: 4,
					borderStyle: "dashed",
					borderColor: swatch.border,
					justifyContent: "center",
					alignItems: "center"
				}}
				onPress={() => this.inspectSwatchHandler(swatch.color)}
				onLongPress={() => this.resetHandler(swatch.color)}
			>
				<Text style={{ color: swatch.border }}>{key + 1}</Text>
			</TouchableOpacity>
		);
	};
	render() {
		const swatches = Object.entries(this.props)
			.filter(swatch => {
				return swatch;
			})
			.reduce((acc, curr) => {
				curr[0][0] === "c" ? acc.push(curr[1]) : false;
				return acc;
			}, [])
			.map(this.renderMiniSwatches);

		let instructions;
		if (
			this.props.color1.color === "transparent" ||
			this.props.color2.color === "transparent" ||
			this.props.color3.color === "transparent" ||
			this.props.color4.color === "transparent" ||
			this.props.color5.color === "transparent" ||
			this.props.color6.color === "transparent"
		) {
			instructions = (
				<View style={style.flex1}>
					<View
						style={{
							justifyContent: "center",
							flexDirection: "row"
						}}
					>
						<Text
							style={[
								style.text,
								{ color: "black", fontSize: 13, marginTop: 20 }
							]}
						>
							TAP the Photo to Build Your Palette!
						</Text>
						<View />
					</View>
				</View>
			);
		} else {
			instructions = (
				<View style={style.flex1}>
					<View
						style={{
							justifyContent: "space-between",
							flexDirection: "column",
							alignItems: "center"
						}}
					>
						<Text
							style={[
								style.text,
								{ color: "black", fontSize: 13, marginTop: 20 }
							]}
						>
							TAP on a swatch to read swatch strip or
						</Text>
						<Text
							style={[
								style.text,
								{ color: "black", fontSize: 13 }
							]}
						>
							PRESS on a swatch to edit your Palette!
						</Text>

						<Icon.Button
							size={35}
							name="save"
							backgroundColor="transparent"
							color="#91268d"
							onPress={this.props.savePaletteHandler}
						/>
						
					</View>
				</View>
			);
		}

		return (
			<View
				style={{
					flex: 1,
					backgroundColor: this.props.color
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center"
					}}
				>
					{swatches}
				</View>
				{instructions}
			</View>
		);
	}
}
