import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	Modal,
	Dimensions,
	TouchableOpacity,
	StatusBar
} from "react-native";
import ColorHelper from "color-to-name";
import pant from "nearest-pantone";
import invert from "invert-color";
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";
//
import Loading from "../../../Loading";

const { width, height } = Dimensions.get("window");

export default class LibraryModal extends Component {
	renderCurrentPalette = (swatch, key) => {
		return (
			<TouchableOpacity
				style={{ flex: 1 }}
				key={key}
				underlayColor="transparent"
				onLongPress={() => {
					console.log("long press");
					this.props.setViewportColor(swatch);
					this.props.navigate("Viewport");
				}}
			>
				<View
					style={{
						backgroundColor: swatch,
						flex: 1,
						justifyContent: "center",
						paddingLeft: 20
					}}
				>
					<Text style={{ color: invert(swatch, true) }}>
						{pant.getClosestColor(swatch)
							? pant.getClosestColor(swatch).name.toUpperCase()
							: "BLACK"}
					</Text>
					<Text style={{ color: invert(swatch, true) }}>
						{swatch.toUpperCase()}
					</Text>
					<Text style={{ color: invert(swatch, true) }}>{`R: ${
						ColorHelper.hexToRGB(swatch).r
					} G: ${ColorHelper.hexToRGB(swatch).g} B: ${
						ColorHelper.hexToRGB(swatch).b
					}`}</Text>
					<Text style={{ color: invert(swatch, true) }}>
						{pant.getClosestColor(swatch)
							? `PANTONE\xAE ${
									pant.getClosestColor(swatch).pantone
							  }`
							: "No Pantone"}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};
	render() {
		if (this.props.currentPaletteMounted) {
			const palette = this.props.currentPalette.swatches.map(
				this.renderCurrentPalette
			);
			return (
				<View style={{ flex: 1, backgroundColor: "#ddd" }}>
					<StatusBar barStyle="dark-content" hidden={false} />
					<View style={style.statusPadding} />

					<View
						style={{
							height: height / 10,
							backgroundColor: "transparent",
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: "#ddd",
							alignItems: "center",
							borderBottomColor: "black",
							borderBottomWidth: 1
						}}
					>
						<View>
							<Icon.Button
								size={40}
								name="md-trash"
								backgroundColor="transparent"
								color="#b00"
								onLongPress={() =>
									this.props.deletePalette(
										this.props.currentPalette.name
									)
								}
								underlayColor="transparent"
							/>
						</View>
						<View>
							<Icon.Button
								size={40}
								name="md-close-circle"
								backgroundColor="transparent"
								color="#91268d"
								onPress={this.props.resetCurrentPalette}
								underlayColor="transparent"
							/>
						</View>
					</View>
					<View style={{ flex: 8 }}>{palette}</View>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
