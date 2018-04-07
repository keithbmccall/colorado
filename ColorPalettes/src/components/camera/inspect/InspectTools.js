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
	render() {
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
								{ color: "white", fontSize: 18 }
							]}
						>
							"Tap the Photo to Build Your Palette!"
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
							justifyContent: "center",
							flexDirection: "row"
						}}
					>
						<Text
							style={[
								style.text,
								{ color: "white", fontSize: 18 }
							]}
						>
							"Tap a Swatch to Edit Your Palette!"
						</Text>
						<View />
					</View>
					<View
						style={{
							alignSelf: "center"
						}}
					>
						<Icon.Button
							size={35}
							name="save"
							backgroundColor="transparent"
							color="#91268d"
							onPress={() => console.log("saved")}
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
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color1.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color1.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color1.color)
						}
					>
						<Text style={{ color: this.props.color1.border }}>
							1
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color2.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color2.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color2.color)
						}
					>
						<Text style={{ color: this.props.color2.border }}>
							2
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color3.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color3.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color3.color)
						}
					>
						<Text style={{ color: this.props.color3.border }}>
							3
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color4.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color4.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color4.color)
						}
					>
						<Text style={{ color: this.props.color4.border }}>
							4
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color5.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color5.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color5.color)
						}
					>
						<Text style={{ color: this.props.color5.border }}>
							5
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: standardBoxSize,
							height: standardBoxSize,
							backgroundColor: this.props.color6.color,
							borderWidth: 2,
							borderStyle: "dashed",
							borderColor: this.props.color6.border,
							justifyContent: "center",
							alignItems: "center"
						}}
						onPress={() =>
							this.resetHandler(this.props.color6.color)
						}
					>
						<Text style={{ color: this.props.color6.border }}>
							6
						</Text>
					</TouchableOpacity>
				</View>
				{instructions}
			</View>
		);
	}
}
