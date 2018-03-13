import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	CameraRoll,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	Dimensions,
	TouchableHighlight
} from "react-native";
import rgbHex from "rgb-hex";
import styles from "../../Styles";

export default class InspectModal extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.navStatus} />
				<Button title="Exit" onPress={this.props.inspectModalToggle} />
				<View style={{ flex: 1, backgroundColor: this.props.color }} />
			</View>
		);
	}
}
