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
import HomeNav from "./HomeNav";
//

export default class SettingsPage extends Component {
	render() {
		return (
			<View style={styles.homeScreen}>
				<HomeNav />
				<View style={{ flex: 9, backgroundColor: "skyblue" }}>
					<Text>settings</Text>
					<Button
						onPress={() => this.props.navigation.navigate("Camera")}
						title="Camera"
						color="#bbb"
					/>
				</View>
			</View>
		);
	}
}
