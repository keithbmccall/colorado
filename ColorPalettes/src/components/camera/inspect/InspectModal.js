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

//
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";
//
import Loading from "../../../Loading";
import InspectTools from "./InspectTools";
import InspectImage from "./InspectImage";
import SwatchModal from '../../../utility/SwatchModal'
//
const { width, height } = Dimensions.get("window");

export default class InspectModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paletteName: "Untitled"
		};
	}

	savePaletteHandler = () => {
		this.props.savePalette(this.state);
		this.resetSwatchHandler();
		this.props.navigate("Library");
	};

	resetSwatchHandler = () => {
		this.props.toggleInspectModal();
		this.props.resetSwatches();
	};

	render() {
		if (this.props.currentImageMounted && this.props.swatchesLoaded) {
			return (
				<View style={{ flex: 1, backgroundColor: "#eee" }}>
					<StatusBar barStyle="dark-content" hidden={false} />
					<View style={style.statusPadding} />
					<View style={{ flex: 8, backgroundColor: "#fff" }}>
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
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									justifyContent: "center"
								}}
							>
								<TextInput
									placeholder="Name your palette..."
									style={{
										marginLeft:50,
										height: 40,
										width: 220,
										borderColor: "gray",
										borderWidth: 1,
										paddingLeft: 5,
										backgroundColor: "white",
										textAlign: "center",
										borderRadius: 10
									}}
									keyboardType="default"
									keyboardAppearance="dark"
									returnKeyType="done"
									autoCorrect={false}
									onChangeText={paletteName =>
										this.setState({ paletteName })
									}
									value={this.state.name}
									onSubmitEditing={Keyboard.dismiss}
								/>
							</View>
							<View>
								<Icon.Button
									size={40}
									name="md-close-circle"
									backgroundColor="transparent"
									color="#91268d"
									onPress={this.resetSwatchHandler}
									underlayColor="transparent"
								/>
							</View>
						</View>

						<InspectImage
							currentImage={this.props.currentImage}
							findColor={this.props.findColor}
							onCurrentImageLayout={
								this.props.onCurrentImageLayout
							}
						/>
					</View>
					<View
						style={{
							flex: 4
						}}
					>
						<InspectTools
							toggleSwatchInspectModal={
								this.props.toggleSwatchInspectModal
							}
							//
							savePaletteHandler={this.savePaletteHandler}
							//
							resetSetColor={this.props.resetSetColor}
							color1={this.props.color1}
							color2={this.props.color2}
							color3={this.props.color3}
							color4={this.props.color4}
							color5={this.props.color5}
							color6={this.props.color6}
						/>
					</View>
					<Modal
						animationType="fade"
						transparent={false}
						visible={this.props.inspectSwatchModalOpen}
					>
						<SwatchModal
							swatch={
								this.props.currentInspectSwatch
							}
							toggleSwatchInspectModal={
								this.props.toggleSwatchInspectModal
							}
						/>
					</Modal>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
