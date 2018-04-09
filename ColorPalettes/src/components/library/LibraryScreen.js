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
	Modal,
	RefreshControl,
	StatusBar,
	Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//
import LibraryItems from "./library/LibraryItems";
import LibraryModal from "./library/LibraryModal";
// import InspectModal from "./InspectModal";
//
import Loading from "../../Loading";
//
import style from "../../Style";
const { width, height } = Dimensions.get("window");

export default class Library extends Component {
	renderPaletteLibrary = (palette, key) => {
		return (
			<LibraryItems
				key={key}
				palette={palette}
				toggleLibraryModal={this.props.screenProps.toggleLibraryModal}
			/>
		);
	};
	render() {
		if (this.props.screenProps.palettesLoaded) {
			const palettes = this.props.screenProps.palettes.map(
				this.renderPaletteLibrary
			);
			return (
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						backgroundColor: "#fff"
					}}
				>
					<StatusBar barStyle="dark-content" hidden={false} />
					<View
						style={[
							style.statusPadding,
							{ backgroundColor: "#ddd" }
						]}
					/>
					<View
						style={{
							height: height / 10,
							backgroundColor: "transparent",
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: "#ddd",
							alignItems: "center",
							borderBottomColor: "#ccc",
							borderBottomWidth: 1
						}}
					>
						<View>
							<Icon.Button
								size={40}
								name="ios-camera"
								backgroundColor="transparent"
								color="#91268d"
								onPress={() =>
									this.props.navigation.navigate("Camera")
								}
								underlayColor="transparent"
							/>
						</View>
						<View>
							<Icon.Button
								size={40}
								name={this.props.iconWhiteBalance}
								backgroundColor="transparent"
								color="#91268d"
								onPress={this.balanceHandler}
								underlayColor="transparent"
							/>
						</View>

						<View>
							<Icon.Button
								size={40}
								name="ios-eye"
								backgroundColor="transparent"
								color="#91268d"
								onPress={() =>
									this.props.navigation.navigate("Viewport")
								}
								underlayColor="transparent"
							/>
						</View>
					</View>
					<View
						style={{
							backgroundColor: "#fff"
						}}
					>
						<ScrollView>
							<Text
								style={[
									style.textHeader,
									{
										marginTop: 30,
										marginLeft: 10,
										color: "black"
									}
								]}
							>
								Palette Library
							</Text>
							<View
								style={{
									flex: 8,
									backgroundColor: "#fff"
								}}
							>
								{palettes}
							</View>
						</ScrollView>
					</View>
					<Modal
						animationType="fade"
						transparent={false}
						visible={this.props.screenProps.libraryModalOpen}
					>
						<LibraryModal
							currentPalette={
								this.props.screenProps.currentPalette
							}
							toggleLibraryModal={
								this.props.screenProps.toggleLibraryModal
							}
							currentPaletteMounted={
								this.props.screenProps.currentPaletteMounted
							}
							resetCurrentPalette={
								this.props.screenProps.resetCurrentPalette
							}
							navigate={this.props.navigation.navigate}
							setViewportColor={
								this.props.screenProps.setViewportColor
							}
							deletePalette={this.props.screenProps.deletePalette}
						/>
					</Modal>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
