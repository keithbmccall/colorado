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
import { RNCamera } from "react-native-camera";

export default class Camera extends Component {
	render() {
		return (
			<View style={{ flex: 8 }}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					type={this.props.cameraType}
					flashMode={this.props.flashMode}
					whiteBalance={this.props.whiteBalance}
					permissionDialogTitle={"Permission to use camera"}
					permissionDialogMessage={
						"We need your permission to use your camera phone"
					}
				/>
			</View>
		);
	}
}
