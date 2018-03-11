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
	TouchableHighlight,
	StatusBar,
	Dimensions,
	Modal
} from "react-native";
import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import styles from "../../Styles";
//
import HomeNav from "./HomeNav";
//some snips  taken from :
//https://medium.com/react-native-training/mastering-the-camera-roll-in-react-native-13b3b1963a2d

const { width, height } = Dimensions.get("window");
export default class PhotosPage extends Component {
	componentDidMount() {
		this.readImage();
	}

	constructor() {
		super();
		this.state = {
			images: [],
			imagesLoaded: false,
			modalOpen: false,
			currentSwatches: null
		};
		this.getImages = this.getImages.bind(this);
		this.renderImages = this.renderImages.bind(this);
		this.getSwatches = this.getSwatches.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.resetSwatchState = this.resetSwatchState.bind(this);
	}
	resetSwatchState() {
		this.setState({
			currentSwatches: null,
			modalOpen: false
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
				// swatches.forEach(swatch => {
				// 	console.log("color", swatch.color);
				// 	console.log("color-all", swatch);
				// });
				console.log("swatches.length", swatches.length);
			}
			if (swatches) {
				this.setState({
					currentSwatches: swatches
				});
			}
		});
		this.toggleModal();
	}
	getImages() {
		CameraRoll.getPhotos({
			first: 99,
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
	renderSwatches(swatch, key) {
		console.log("renderSwatches", swatch);
		return (
			<TouchableHighlight
				style={{ flex: 1 }}
				key={key}
				underlayColor="transparent"
			>
				<Image
					style={{
						flex: 1,
						backgroundColor: swatch.color
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
			//LOADING FOR SWATCHES MODAL START
			if (this.state.currentSwatches) {
				swatches = this.state.currentSwatches
					.slice(0, 6)
					.map(this.renderSwatches);
			} else {
				swatches = <Text>SWATCHES LOADING</Text>;
			}
			//LOADING FOR SWATCHES MODAL END
			const images = this.state.images.map(this.renderImages);

			return (
				<View style={styles.homeScreen}>
					<HomeNav />
					<Modal
						animationType={"slide"}
						transparent={false}
						visible={this.state.modalOpen}
					>
						<View style={styles.photosModal}>
							<Button
								title="Cancel"
								onPress={this.resetSwatchState}
							/>
							<View
								style={{
									flex: 12,
									backgroundColor: "green",
									flexWrap: "wrap",
									flexDirection: "column"
								}}
							>
								{swatches}
							</View>
							<View style={{ flex: 1, backgroundColor: "red" }} />
						</View>
					</Modal>

					<View style={{ flex: 9, backgroundColor: "#ddd" }}>
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
