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
import Spinner from "react-native-spinkit";

import styles from "../../Styles";

const { width, height } = Dimensions.get("window");

export default class CameraBar extends Component {
	constructor() {
		super();
		// this.renderCameraImages = this.renderCameraImages.bind(this);
	}

	// renderCameraImages(image, key) {
	// 	return (
	// 		<TouchableHighlight
	// 			style={{ flex: 1, padding: 5 }}
	// 			key={key}
	// 			underlayColor="transparent"
	// 			onPress={() => this.props.getSwatches(image, key)}
	// 		>
	// 			<Image
	// 				style={{
	// 					flex: 1
	// 				}}
	// 				source={{
	// 					uri: image.node.image.uri
	// 				}}
	// 			/>
	// 		</TouchableHighlight>
	// 	);
	// }
	render() {
		// if (this.props.imagesLoaded) {
		// 	const recentImages = this.props.images
		// 		.slice(0, 3)
		// 		.map(this.renderCameraImages);
		// 	return (
		// 		<View
		// 			style={{
		// 				flex: 1,
		// 				flexDirection: "row",
		// 				paddingLeft: 10,
		// 				paddingRight: 10,
		// 				backgroundColor: "#222"
		// 			}}
		// 		>
		// 			{recentImages}
		// 		</View>
		// 	);
		// }
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Spinner
					isVisible={true}
					color="#91268d"
					size={100}
					type="9CubeGrid"
				/>
			</View>
		);
	}
}
