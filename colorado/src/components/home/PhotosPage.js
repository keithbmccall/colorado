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
import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import rgbHex from "rgb-hex";
import ColorHelper from "color-to-name";
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
		this.state = {
			images: [],
			imagesLoaded: false,
			modalOpen: false,
			saveModalOpen: false,
			currentSwatches: null,
			currentImage: "",
			swatchesLoaded: false
		};
		this.getImages = this.getImages.bind(this);
		this.renderImages = this.renderImages.bind(this);
		this.getSwatches = this.getSwatches.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.saveModalToggle = this.saveModalToggle.bind(this);
		this.saveModalClose = this.saveModalClose.bind(this);
		this.resetSwatchState = this.resetSwatchState.bind(this);
		this.resetSwatchModal = this.resetSwatchModal.bind(this);
	}
	resetSwatchModal() {
		this.setState({
			swatchesLoaded: false
		});
	}
	resetSwatchState() {
		this.setState({
			currentSwatches: null,
			modalOpen: false,
			currentImage: "",
			swatchesLoaded: false
		});
	}
	saveModalClose() {
		this.setState({
			saveModalOpen: !this.state.saveModalOpen
		});
	}
	saveModalToggle() {
		this.setState({
			saveModalOpen: !this.state.saveModalOpen,
			modalOpen: !this.state.modalOpen
		});
	}
	toggleModal() {
		this.setState({
			modalOpen: !this.state.modalOpen
		});
	}

	getSwatches(image, key) {
		console.log("getSwatches", image);
		const path = image.node.image.uri;
		getAllSwatches({ quality: "high" }, path, (error, swatches) => {
			if (error) {
				console.log("error in PhotosPage.getSwatches", error);
			} else {
				swatches.sort((a, b) => {
					return b.population - a.population;
				});
				console.log("swatches", swatches);
			}
			if (swatches) {
				this.setState({
					currentSwatches: swatches,
					currentImage: path,
					swatchesLoaded: true
				});
			}
		});
		this.toggleModal();
	}
	getImages() {
		CameraRoll.getPhotos({
			first: 200,
			assetType: "All"
		})
			.then(r => {
				console.log("GETIMAGES", r.edges);
				this.setState({ images: r.edges, imagesLoaded: true });
			})
			.catch(err => {
				console.log(err);
			});
	}
	renderImages(image, key) {
		console.log("mapping", image);
		return (
			<TouchableHighlight
				key={key}
				underlayColor="transparent"
				onPress={() => this.getSwatches(image, key)}
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

	componentDidMount() {
		this.getImages();
	}

	render() {
		let swatches;
		if (this.state.imagesLoaded) {
			const images = this.state.images.map(this.renderImages);

			return (
				<View style={styles.homeScreen}>
					<HomeNav />
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.saveModalOpen}
						presentationStyle="overFullScreen"
					>
						<SavePaletteModal
							saveModalToggle={this.saveModalToggle}
							currentSwatches={this.state.currentSwatches}
							navigate={this.props.screenProps.navigate}
							savePalette={this.props.screenProps.savePalette}
							saveModalClose={this.saveModalClose}
							resetSwatchModal={this.resetSwatchModal}
						/>
					</Modal>
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modalOpen}
					>
						<SwatchesModal
							currentSwatches={this.state.currentSwatches}
							currentImage={this.state.currentImage}
							saveModalToggle={this.saveModalToggle}
							resetSwatchState={this.resetSwatchState}
							swatchesLoaded={this.state.swatchesLoaded}
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
