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
import { NavigationActions } from "react-navigation";
import { RNCamera } from "react-native-camera";

import styles from "../../Styles";

export default class Camera extends Component {
	constructor() {
		super();
		this.state = {
			cameraType: RNCamera.Constants.Type.back,
			flashMode: RNCamera.Constants.FlashMode.off,
			whiteBalance: RNCamera.Constants.WhiteBalance.auto,
			zoom: 0,
			cameraFired: false
		};
		this.takePicture = this.takePicture.bind(this);
	}
	takePicture = async function() {
		this.props.openPreviewModal();
		if (this.camera) {
			const options = {
				quality: 1,
				base64: true,
				forceUpOrientation: true
			};
			const data = await this.camera.takePictureAsync(options);
			console.log("cameradata", data);

			CameraRoll.saveToCameraRoll(data.uri).then(() =>
				this.props.getCameraImages()
			);
		}
	};

	render() {
		return (
			<View style={{ flex: 5 }}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={this.takePicture}
				>
					<RNCamera
						ref={ref => {
							this.camera = ref;
						}}
						style={styles.preview}
						type={this.state.cameraType}
						flashMode={this.state.flashMode}
						whiteBalance={this.state.whiteBalance}
						zoom={this.state.zoom}
						permissionDialogTitle={"Permission to use camera"}
						permissionDialogMessage={
							"We need your permission to use your camera phone"
						}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
