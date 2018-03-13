import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll,
	TouchableHighlight,
	StatusBar,
	Dimensions,
	Modal,
	TextInput,
	KeyboardAvoidingView,
	Keyboard
} from "react-native";

import styles from "../../Styles";
//
import HomeNav from "./HomeNav";
import SwatchesModal from "./SwatchesModal";
import SavePaletteModal from "./SavePaletteModal";
//some snips  taken from :
//https://medium.com/react-native-training/mastering-the-camera-roll-in-react-native-13b3b1963a2d

const { width, height } = Dimensions.get("window");
export default class PhotosPage extends Component {
	constructor() {
		super();

		this.renderImages = this.renderImages.bind(this);
	}

	renderImages(image, key) {
		console.log("mapping", image);
		return (
			<TouchableHighlight
				key={key}
				underlayColor="transparent"
				onPress={() => this.props.screenProps.getSwatches(image, key)}
			>
				<Image
					style={{
						width: width / 3,
						height: width / 3
					}}
					source={{
						uri: image.node.image.uri
					}}
				/>
			</TouchableHighlight>
		);
	}

	render() {
		let swatches;
		if (this.props.screenProps.imagesLoaded) {
			const images = this.props.screenProps.images.map(this.renderImages);

			return (
				<View style={styles.homeScreen}>
					<HomeNav />
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.props.screenProps.saveModalOpen}
						presentationStyle="overFullScreen"
					>
						<SavePaletteModal
							saveModalToggle={
								this.props.screenProps.saveModalToggle
							}
							currentSwatches={
								this.props.screenProps.currentSwatches
							}
							navigate={this.props.screenProps.navigate}
							savePalette={this.props.screenProps.savePalette}
							saveModalClose={
								this.props.screenProps.saveModalClose
							}
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
							currentSwatches={
								this.props.screenProps.currentSwatches
							}
							currentImage={this.props.screenProps.currentImage}
							saveModalToggle={
								this.props.screenProps.saveModalToggle
							}
							resetSwatchState={
								this.props.screenProps.resetSwatchState
							}
							swatchesLoaded={
								this.props.screenProps.swatchesLoaded
							}
						/>
					</Modal>

					<View style={styles.cameraRollContainer}>
						<ScrollView contentContainerStyle={styles.cameraRoll}>
							{images}
						</ScrollView>
					</View>
				</View>
			);
		}

		return <View>LOADING</View>;
	}
}
