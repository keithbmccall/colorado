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
					toggleInspectModal={
						this.props.screenProps.toggleInspectModal
					}
					toggleCameraRollModal={
						this.props.screenProps.toggleCameraRollModal
					}
					getDominantSwatches={
						this.props.screenProps.getDominantSwatches
					}
				/>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.props.screenProps.inspectModalOpen}
				>
					<InspectModal
						color1={this.props.screenProps.color1}
						color2={this.props.screenProps.color2}
						color3={this.props.screenProps.color3}
						color4={this.props.screenProps.color4}
						color5={this.props.screenProps.color5}
						color6={this.props.screenProps.color6}
						//
						resetSetColor={this.props.screenProps.resetSetColor}
						findColor={this.props.screenProps.findColor}
						resetColor={this.props.screenProps.resetColor}
						onCurrentImageLayout={
							this.props.screenProps.onCurrentImageLayout
						}
						resetSwatches={this.props.screenProps.resetSwatches}
						currentImageMounted={
							this.props.screenProps.currentImageMounted
						}
						currentImage={this.props.screenProps.currentImage}
						toggleInspectModal={
							this.props.screenProps.toggleInspectModal
						}
						getDominantSwatches={
							this.props.screenProps.getDominantSwatches
						}
						swatchesLoaded={this.props.screenProps.swatchesLoaded}
					/>
				</Modal>
			</View>
		);
	}
}
