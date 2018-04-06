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
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class CameraRollImages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: this.props.image
		};
	}
	activateInspect = e => {
		this.props.toggleInspectModal();
		this.props.toggleCameraRollModal();
		this.props.setCurrentImage(this.state.image.node.image);
	};
	render() {
		return (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={this.activateInspect}
				style={{
					width: width / 3,
					height: width / 3
				}}
			>
				<Image
					style={{
						flex: 1
					}}
					source={{
						uri: this.props.image.node.image.uri
					}}
				/>
			</TouchableHighlight>
		);
	}
}
