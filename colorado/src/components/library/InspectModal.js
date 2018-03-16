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
import Icon from "react-native-vector-icons/Entypo";

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
				<View style={styles.navRow}>
					<View>
						<Icon.Button
							size={25}
							name="circle-with-cross"
							backgroundColor="transparent"
							color="#91268d"
							onPress={this.props.inspectModalToggle}
						/>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Image
							style={{
								height: "50%",
								width: "45%"
							}}
							source={require("../../images/colorado_logo.png")}
						/>
					</View>
					<View style={{ marginRight: "2%" }}>
						<Icon.Button
							size={25}
							name="eye"
							backgroundColor="transparent"
							color="#91268d"
							onPress={this.jumpToComparison}
						/>
					</View>
				</View>
				<View style={{ flex: 12, backgroundColor: this.props.color }} />
			</View>
		);
	}
}
