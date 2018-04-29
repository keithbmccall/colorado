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
	Modal,
	StatusBar
} from "react-native";
import { RNCamera } from "react-native-camera";

import style from "../../../Style";
//
import Aux from "../../../Aux";
import CameraPunch from "./CameraPunch";
import CameraOptions from "./CameraOptions";
import Viewport from "../viewport/Viewport";
//
const { Type, FlashMode, WhiteBalance } = RNCamera.Constants;

export default class Camera extends Component {
	constructor() {
		super();
		this.state = {
			cameraType: Type.back,
			flashMode: FlashMode.off,
			whiteBalance: WhiteBalance.auto,
			zoom: 0,
			cameraFired: false,
			//icons
			iconFlashMode: "ios-flash-outline",
			iconCameraType: "ios-reverse-camera",
			iconWhiteBalance: "ios-aperture-outline"
		};
	}
	// camera options
	toggleFlashMode = () => {
		this.state.flashMode === FlashMode.off
			? this.setState({
					flashMode: FlashMode.on,

					iconFlashMode: "ios-flash"
			  })
			: this.setState({
					flashMode: FlashMode.off,
					iconFlashMode: "ios-flash-outline"
			  });
	};
	toggleCameraType = () => {
		this.state.cameraType === Type.back
			? this.setState({
					cameraType: Type.front,
					iconCameraType: "ios-reverse-camera-outline"
			  })
			: this.setState({
					cameraType: Type.back,
					iconCameraType: "ios-reverse-camera"
			  });
	};

	// camera options end
	takePicture = async () => {
		this.props.toggleInspectModal();
		if (this.camera) {
			const options = {
				quality: 1,
				base64: true,
				forceUpOrientation: true
			};
			const data = await this.camera.takePictureAsync(options);
			console.log("cameradata", data);
			this.props.setCurrentImage(data);
			CameraRoll.saveToCameraRoll(data.uri).then(res => {
				let dummy = {};
				dummy.uri = res;
				this.props.getDominantSwatches(dummy);
			});
		} else {
			throw new Error("Camera has failed!");
		}
	};
	UNSAFE_componentWillMount() {
		this.setState({
			cameraFired: !this.state.cameraFired
		});
	}
	render() {
		let viewPort;
		if (this.props.viewMode) {
			viewPort = <Viewport viewportColor={this.props.viewportColor} />;
		}
		return (
			<Aux>
				<CameraOptions
					toggleCameraType={this.toggleCameraType}
					toggleWhiteBalance={this.toggleWhiteBalance}
					toggleFlashMode={this.toggleFlashMode}
					iconCameraType={this.state.iconCameraType}
					iconFlashMode={this.state.iconFlashMode}
					toggleViewport={this.props.toggleViewport}
					viewMode={this.props.viewMode}
				/>
				<View style={{ flex: 8 }}>
					<RNCamera
						ref={ref => {
							this.camera = ref;
						}}
						style={style.preview}
						type={this.state.cameraType}
						flashMode={this.state.flashMode}
						permissionDialogTitle={"Permission to use camera"}
						permissionDialogMessage={
							"We need your permission to use your camera phone"
						}
					>
						{viewPort}
					</RNCamera>
				</View>
				<CameraPunch
					navigate={this.props.navigate}
					toggleCameraRollModal={this.props.toggleCameraRollModal}
					takePicture={this.takePicture}
					getCameraRoll={this.props.getCameraRoll}
				/>
			</Aux>
		);
	}
}
