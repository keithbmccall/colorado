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
//
import Camera from "./Camera";
import CameraPunch from "./CameraPunch";
import CameraOptions from "./CameraOptions";
//
import style from "../../Style";

export default class CameraScreen extends Component {
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
		if (this.camera) {
			const options = {
				quality: 1,
				base64: true,
				forceUpOrientation: true
			};
			const data = await this.camera.takePictureAsync(options);
			console.log("cameradata", data);

			CameraRoll.saveToCameraRoll(data.uri).then(res =>
				console.log("saved", res)
			);
		}
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column"
				}}
			>
				<View style={style.statusPadding} />
				<CameraOptions />
				<Camera
					whiteBalance={this.state.whiteBalance}
					flashMode={this.state.flashMode}
					cameraType={this.state.cameraType}
				/>
				<CameraPunch fire={this.takePicture} />
			</View>
		);
	}
}
