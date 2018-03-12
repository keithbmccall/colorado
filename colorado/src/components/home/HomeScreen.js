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
import { HomeRouter } from "./HomeRouter";

//

export default class HomeScreen extends Component {
	render() {
		const screenProps = {
			savePalette: this.props.screenProps,
			navigate: this.props.navigation.navigate
		};
		console.log();
		return <HomeRouter screenProps={screenProps} />;
	}
}
