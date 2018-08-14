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
	StatusBar,
	TextInput,
	Keyboard
} from "react-native";
import style from "../Style";
import Icon from "react-native-vector-icons/Ionicons";
import ColorHelper from "color-to-name";
import pant from "nearest-pantone";
import invert from "invert-color";

const { width, height } = Dimensions.get("window");

const SwatchModal = props => {
	const { swatch, toggleSwatchInspectModal } = props;
	let options = (
		<View
			style={{
				height: height / 10,
				backgroundColor: "#eee",
				flexDirection: "row",
				justifyContent: "flex-end",
				alignItems: "center",
				borderBottomColor: "#ccc",
				borderBottomWidth: 1
			}}
		>
			<View>
				<Icon.Button
					size={40}
					name="md-close-circle"
					backgroundColor="transparent"
					color="#91268d"
					onPress={toggleSwatchInspectModal}
					underlayColor="transparent"
				/>
			</View>
		</View>
	);
	if (props.currentPaletteMounted) {
		options = (
			<View
				style={{
					height: height / 10,
					backgroundColor: "transparent",
					flexDirection: "row",
					justifyContent: "space-between",
					backgroundColor: "#eee",
					alignItems: "center",
					borderBottomColor: "black",
					borderBottomWidth: 1
				}}
			>
				<View>
					<Icon.Button
						size={40}
						name="md-eye"
						backgroundColor="transparent"
						color="#91268d"
						onPress={() => {
							props.libraryToViewport(swatch)
							props.navigate("Camera");
							
						}}
						underlayColor="transparent"
					/>
				</View>
				<View>
					<Icon.Button
						size={40}
						name="md-close-circle"
						backgroundColor="transparent"
						color="#91268d"
						onPress={toggleSwatchInspectModal}
						underlayColor="transparent"
					/>
				</View>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="dark-content" hidden={false} />
			<View style={style.statusPadding} />
			<View style={{ flex: 8, backgroundColor: swatch }}>
				{options}
				<View style={{ marginTop: 50, marginLeft: 30 }}>
					<Text
						style={{
							fontSize: 19,
							color: invert(swatch, true)
						}}
					>
						{pant.getClosestColor(swatch)
							? pant.getClosestColor(swatch).name.toUpperCase()
							: "BLACK"}
					</Text>
					<Text
						style={{
							fontSize: 19,
							color: invert(swatch, true)
						}}
					>
						{swatch.toUpperCase()}
					</Text>
					<Text
						style={{
							fontSize: 19,
							color: invert(swatch, true)
						}}
					>{`R: ${ColorHelper.hexToRGB(swatch).r} G: ${
						ColorHelper.hexToRGB(swatch).g
					} B: ${ColorHelper.hexToRGB(swatch).b}`}</Text>
					<Text
						style={{
							fontSize: 19,
							color: invert(swatch, true)
						}}
					>
						{pant.getClosestColor(swatch)
							? `PANTONE\xAE ${
									pant.getClosestColor(swatch).pantone
							  }`
							: "No Pantone"}
					</Text>
				</View>
			</View>
		</View>
	);
};
export default SwatchModal;
