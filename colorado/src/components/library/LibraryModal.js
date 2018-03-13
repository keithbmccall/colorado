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
	Modal,
	Dimensions,
	TouchableHighlight
} from "react-native";
import rgbHex from "rgb-hex";
import ColorHelper from "color-to-name";
import InspectModal from "./InspectModal";

import styles from "../../Styles";

const { width, height } = Dimensions.get("window");

export default class LibraryModal extends Component {
	constructor() {
		super();
		this.state = {
			inspectModalOpen: false,
			inspectingColor: "white",
			inspectingText: "white"
		};
		this.inspectModalToggle = this.inspectModalToggle.bind(this);
		this.inspectHandler = this.inspectHandler.bind(this);
	}
	inspectHandler(color, text) {
		this.setState(
			{
				inspectingColor: color,
				inspectingText: text
			},
			this.inspectModalToggle()
		);
	}
	inspectModalToggle() {
		this.setState({
			inspectModalOpen: !this.state.inspectModalOpen
		});
	}
	render() {
		const palette = this.props.palette;
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.navStatus} />
				<Modal
					animationType="fade"
					transparent={false}
					visible={this.state.inspectModalOpen}
					presentationStyle="overFullScreen"
				>
					<InspectModal
						inspectModalToggle={this.inspectModalToggle}
						color={this.state.inspectingColor}
						text={this.state.inspectingText}
					/>
				</Modal>
				<Button title="Exit" onPress={this.props.libraryModalToggle} />
				<View style={{ flex: 1, flexDirection: "row" }}>
					<TouchableHighlight
						underlayColor={palette.first}
						onPress={this.inspectHandler.bind(
							this,
							palette.first,
							palette.fifth
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.first).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.fifth,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:{"#" +
									rgbHex(palette.first).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.fifth,
									fontSize: 16,
									width: 100
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.first).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.first).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.first).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={palette.second}
						onPress={this.inspectHandler.bind(
							this,
							palette.second,
							palette.third
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.second).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.third,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:{" "}
								{"#" + rgbHex(palette.second).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.third,
									fontSize: 16,
									width: 150
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.second).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.second).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.second).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={palette.third}
						onPress={this.inspectHandler.bind(
							this,
							palette.third,
							palette.sixth
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.third).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.sixth,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:
								{"#" + rgbHex(palette.third).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.sixth,
									fontSize: 16,
									width: 150
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.third).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.third).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.third).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={palette.fourth}
						onPress={this.inspectHandler.bind(
							this,
							palette.fourth,
							palette.second
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.fourth).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.second,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:{" "}
								{"#" + rgbHex(palette.fourth).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.second,
									fontSize: 16,
									width: 150
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.fourth).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.fourth).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.fourth).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={palette.fifth}
						onPress={this.inspectHandler.bind(
							this,
							palette.fifth,
							palette.first
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.fifth).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.first,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:{" "}
								{"#" + rgbHex(palette.fifth).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.first,
									fontSize: 16,
									width: 150
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.fifth).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.fifth).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.fifth).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						underlayColor={palette.sixth}
						onPress={this.inspectHandler.bind(
							this,
							palette.sixth,
							palette.fourth
						)}
						style={{
							width: width / 6,
							height: height,
							backgroundColor:
								"#" + rgbHex(palette.sixth).substring(0, 6)
						}}
					>
						<View
							style={{
								transform: [{ rotate: "90deg" }],
								marginTop: 100,
								flexDirection: "row"
							}}
						>
							<Text
								style={{
									color: palette.fourth,
									fontSize: 16,
									width: 150
								}}
							>
								HEX:{" "}
								{"#" + rgbHex(palette.sixth).substring(0, 6)}
							</Text>
							<Text
								style={{
									color: palette.fourth,
									fontSize: 16,
									width: 150
								}}
							>
								RGB:
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.sixth).substring(0, 6)
								).r + " "}
								{ColorHelper.hexToRGB(
									"#" + rgbHex(palette.sixth).substring(0, 6)
								).g + " "}
								{
									ColorHelper.hexToRGB(
										"#" +
											rgbHex(palette.sixth).substring(
												0,
												6
											)
									).b
								}
							</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}
