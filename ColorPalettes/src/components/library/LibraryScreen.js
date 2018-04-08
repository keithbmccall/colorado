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
						backgroundColor: "#ddd"
					}}
				>
					<StatusBar barStyle="dark-content" hidden={false} />
					<View style={style.statusPadding} />
					<View
						style={{
							height: height / 10,
							backgroundColor: "transparent",
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: "#ddd",
							borderBottomColor: "#bbb",
							borderBottomWidth: 1
						}}
					/>
					<View
						style={{
							backgroundColor: "white"
						}}
					>
						<ScrollView>
							<Text style={[style.textHeader, { marginTop: 30 }]}>
								Palette Library
							</Text>
							<View
								style={{
									flex: 8,
									backgroundColor: "white"
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
						/>
					</Modal>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
