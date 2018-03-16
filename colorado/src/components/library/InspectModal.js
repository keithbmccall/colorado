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
	constructor() {
		super();
		this.state = {
			color: "#444"
		};
	}
	jumpToComparison = e => {
		this.props.libraryModalClose();
		this.props.inspectModalClose();
		let injectColor = "#" + rgbHex(this.state.color).substring(0, 6);
		this.props.navigation.navigate("Regular");
		this.props.injectColorComparison(injectColor);
		this.props.navigation.navigate("Settings");
	};
	componentDidMount() {
		this.setState({
			color: this.props.color
		});
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.navStatus} />
				<Button title="Exit" onPress={this.props.inspectModalToggle} />
				<TouchableHighlight
					style={{ flex: 1 }}
					onPress={this.jumpToComparison}
				>
					<View
						style={{ flex: 1, backgroundColor: this.props.color }}
					/>
				</TouchableHighlight>
			</View>
		);
	}
}
