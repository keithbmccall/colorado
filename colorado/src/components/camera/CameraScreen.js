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
	Modal
} from "react-native";
// import { NavigationActions } from "react-navigation";
import { RNCamera } from "react-native-camera";
import SwatchesModal from "../home/SwatchesModal";
import SavePaletteModal from "../home/SavePaletteModal";
import Camera from "./Camera";

import styles from "../../Styles";

// const cameraToPhotos = NavigationActions.navigate({
// 	routeName: "Home",

// 	action: NavigationActions.navigate({ routeName: "Photos" })
// });

//https://github.com/react-native-community/react-native-camera/blob/HEAD/docs/RNCamera.md
//taken from RNCamera documentation

export default class CameraScreen extends Component {
	getCameraImages = () => {
		this.props.screenProps.getCameraImage();
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					backgroundColor: "black"
				}}
			>
				<Camera
					takePicture={this.takePicture}
					getCameraImages={this.getCameraImages}
					openPreviewModal={this.props.screenProps.openPreviewModal}
					getSwatches={this.props.screenProps.getSwatches}
				/>

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.props.screenProps.saveModalOpen}
					presentationStyle="overFullScreen"
				>
					<SavePaletteModal
						saveModalToggle={this.props.screenProps.saveModalToggle}
						currentSwatches={this.props.screenProps.currentSwatches}
						navigate={this.props.navigation.navigate}
						savePalette={this.props.screenProps.savePalette}
						saveModalClose={this.props.screenProps.saveModalClose}
						resetSwatchModal={
							this.props.screenProps.resetSwatchModal
						}
					/>
				</Modal>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.props.screenProps.previewModalOpen}
				>
					<SwatchesModal
						currentSwatches={this.props.screenProps.currentSwatches}
						currentImage={this.props.screenProps.currentImage}
						saveModalToggle={this.props.screenProps.saveModalToggle}
						resetSwatchState={
							this.props.screenProps.resetSwatchState
						}
						swatchesLoaded={this.props.screenProps.swatchesLoaded}
					/>
				</Modal>
			</View>
		);
	}
}
