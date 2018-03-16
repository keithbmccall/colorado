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
	Modal
} from "react-native";
import LibraryItems from "./LibraryItems";
import LibraryModal from "./LibraryModal";
import InspectModal from "./InspectModal";
import styles from "../../Styles";

export default class LibraryScreen extends Component {
	constructor() {
		super();
		this.state = {
			libraryModalOpen: false,
			inspectModalOpen: false,
			inspectingColor: "white",
			inspectingText: "white",
			palette: {}
		};
	}
	inspectModalClose = () => {
		this.setState({
			inspectModalOpen: false
		});
	};
	inspectModalToggle = (color, text) => {
		this.setState({
			inspectingColor: color,
			inspectingText: text,
			inspectModalOpen: !this.state.inspectModalOpen,
			libraryModalOpen: !this.state.libraryModalOpen
		});
	};
	libraryModalClose = () => {
		this.setState({
			libraryModalOpen: false
		});
	};
	libraryModalToggle = palette => {
		this.setState({
			libraryModalOpen: !this.state.libraryModalOpen,
			palette: palette
		});
	};
	renderLibrary = (palette, key) => {
		return (
			<LibraryItems
				palette={palette}
				key={key}
				libraryModalToggle={this.libraryModalToggle}
				deletePalette={this.props.screenProps.deletePalette}
			/>
		);
	};
	render() {
		const palettes = this.props.screenProps.palettes.map(
			this.renderLibrary
		);

		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.inspectModalOpen}
					presentationStyle="overFullScreen"
				>
					<InspectModal
						inspectModalClose={this.inspectModalClose}
						libraryModalClose={this.libraryModalClose}
						injectColorComparison={
							this.props.screenProps.injectColorComparison
						}
						navigation={this.props.navigation}
						inspectModalToggle={this.inspectModalToggle}
						color={this.state.inspectingColor}
						text={this.state.inspectingText}
					/>
				</Modal>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.libraryModalOpen}
					presentationStyle="overFullScreen"
				>
					<LibraryModal
						inspectModalToggle={this.inspectModalToggle}
						libraryModalClose={this.libraryModalClose}
						navigation={this.props.navigation}
						palette={this.state.palette}
						libraryModalToggle={this.libraryModalToggle}
					/>
				</Modal>

				<View style={styles.navStatus} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={[styles.textHeader, { marginTop: 30 }]}>
						Palette Library
					</Text>
					<View style={{ flex: 1 }}>{palettes}</View>
				</ScrollView>
			</View>
		);
	}
}
