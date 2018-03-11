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
	Dimensions
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
	// readImage() {
	// 	ImagePicker.launchImageLibrary({}, response => {
	// 		console.log("response", response);
	// 		var path = response.origURL;
	// 		getAllSwatches({}, path, (error, swatches) => {
	// 			if (error) {
	// 				console.log(error);
	// 			} else {
	// 				swatches.sort((a, b) => {
	// 					return b.population - a.population;
	// 				});
	// 				swatches.forEach(swatch => {
	// 					console.log("color", swatch.color);
	// 					console.log("color-all", swatch);
	// 				});
	// 			}
	// 		});
	// 	});
	// }
	// componentDidMount() {
	// 	this.readImage();
	// }

	constructor() {
		super();
		this.state = {
			images: [],
			imagesLoaded: false
		};
		this.getImages = this.getImages.bind(this);
		this.renderImages = this.renderImages.bind(this);
		this.pressHandler = this.pressHandler.bind(this);
	}
	pressHandler(image, key) {
		console.log("pressHandler", image);
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
				onPress={() => this.pressHandler(image, key)}
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
		if (this.state.imagesLoaded) {
			const images = this.state.images.map(this.renderImages);
			return (
				<View style={styles.homeScreen}>
					<HomeNav />
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
