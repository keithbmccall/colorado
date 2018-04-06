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
import CameraRollModal from "./cameraroll/CameraRollModal";
import InspectModal from "./inspect/InspectModal";

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
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.props.screenProps.inspectModalOpen}
				>
					<InspectModal
						currentImageMounted={
							this.props.screenProps.currentImageMounted
						}
						currentImage={this.props.screenProps.currentImage}
						toggleInspectModal={
							this.props.screenProps.toggleInspectModal
						}
					/>
				</Modal>
			</View>
		);
	}
}
