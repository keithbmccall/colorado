import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll
} from "react-native";
import styles from "../../Styles";

export default class CameraScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>CameraScreen</Text>
			</View>
		);
	}
}
