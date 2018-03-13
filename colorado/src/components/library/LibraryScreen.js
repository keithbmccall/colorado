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
import styles from "../../Styles";

export default class LibraryScreen extends Component {
	constructor() {
		super();
		this.state = {
			libraryModalOpen: false,
			palette: {}
		};
		this.renderLibrary = this.renderLibrary.bind(this);
		this.libraryModalToggle = this.libraryModalToggle.bind(this);
	}

	libraryModalToggle(palette) {
		this.setState({
			libraryModalOpen: !this.state.libraryModalOpen,
			palette: palette
		});
	}
	renderLibrary(palette, key) {
		return (
			<LibraryItems
				palette={palette}
				key={key}
				libraryModalToggle={this.libraryModalToggle}
			/>
		);
	}
	render() {
		const palettes = this.props.screenProps.palettes.palettes.map(
			this.renderLibrary
		);

		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.libraryModalOpen}
					presentationStyle="overFullScreen"
				>
					<LibraryModal
						palette={this.state.palette}
						libraryModalToggle={this.libraryModalToggle}
					/>
				</Modal>
				<View style={styles.navStatus} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text>LibraryScreen</Text>
					<View style={{ flex: 1 }}>{palettes}</View>
				</ScrollView>
			</View>
		);
	}
}
