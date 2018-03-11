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
	StatusBar
} from "react-native";
import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import styles from "../../Styles";
//
import HomeNav from "./HomeNav";
//

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
			images: []
		};
		this.getImages = this.getImages.bind(this);
	}
	//https://medium.com/react-native-training/mastering-the-camera-roll-in-react-native-13b3b1963a2d
	getImages() {
		CameraRoll.getPhotos({
			first: 20,
			assetType: "All"
		})
			.then(r => {
				console.log("GETIMAGES", r.edges);
				this.setState({ photos: r.edges });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<View>
				<StatusBar backgroundColor="blue" barStyle="dark-content" />
				<Text>some text</Text>
				<Button title="click this" onPress={this.getImages} />
			</View>
		);
	}
}
