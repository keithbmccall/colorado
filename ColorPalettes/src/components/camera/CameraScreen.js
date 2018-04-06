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
//
import Camera from "./camera/Camera";
import CameraPunch from "./camera/CameraPunch";
import CameraOptions from "./camera/CameraOptions";
import CameraRollModal from "./cameraroll/CameraRollModal";

//
import style from "../../Style";
export default class CameraScreen extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					backgroundColor: "black"
				}}
			>
				<StatusBar hidden={false} barStyle="light-content" />
				<View style={style.statusPadding} />
				<Camera
					getCameraRoll={this.props.screenProps.getCameraRoll}
					setCurrentImage={this.props.screenProps.setCurrentImage}
				/>

				<Modal
					animationType="slide"
					transparent={false}
					visible={this.props.screenProps.cameraRollModalOpen}
				>
					<CameraRollModal
						navigate={this.props.navigation.navigate}
						toggleInspectModal={
							this.props.screenProps.toggleInspectModal
						}
						setCurrentImage={this.props.screenProps.setCurrentImage}
						toggleCameraRollModal={
							this.props.screenProps.toggleCameraRollModal
						}
						cameraRollImages={
							this.props.screenProps.cameraRollImages
						}
						cameraRollLoaded={
							this.props.screenProps.cameraRollLoaded
						}
					/>
				</Modal>
			</View>
		);
	}
}
