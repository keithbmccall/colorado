import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll
} from "react-native";
import styles from "../../Styles";
import { HomeRouter } from "./HomeRouter";

//

export default class HomeScreen extends Component {
	render() {
		const screenProps = {
			navigate: this.props.navigation.navigate,
			//
			savePalette: this.props.screenProps.savePalette,
			getPalettes: this.props.screenProps.getPalettes,
			palettes: this.props.screenProps.palettes,
			getSwatches: this.props.screenProps.getSwatches,
			images: this.props.screenProps.images,
			imagesLoaded: this.props.screenProps.imagesLoaded,
			previewModalOpen: this.props.screenProps.previewModalOpen,
			saveModalOpen: this.props.screenProps.saveModalOpen,
			currentSwatches: this.props.screenProps.currentSwatches,
			currentImage: this.props.screenProps.currentImage,
			swatchesLoaded: this.props.screenProps.swatchesLoaded,
			getImages: this.props.screenProps.getImages,
			resetSwatchState: this.props.screenProps.resetSwatchState,
			resetSwatchModal: this.props.screenProps.resetSwatchModal,
			saveModalClose: this.props.screenProps.saveModalClose,
			saveModalToggle: this.props.screenProps.saveModalToggle,
			toggleModal: this.props.screenProps.toggleModal
		};
		console.log();
		return <HomeRouter screenProps={screenProps} />;
	}
}
