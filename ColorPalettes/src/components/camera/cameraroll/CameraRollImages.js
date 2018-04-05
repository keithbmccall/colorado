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
	render() {
		return (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={e => this.props.screenProps.getSwatches(e, image)}
			>
				<Image
					style={{
						width: width / 3,
						height: width / 3
					}}
					source={{
						uri: this.props.image.node.image.uri
					}}
				/>
			</TouchableHighlight>
		);
	}
}
