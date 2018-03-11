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
		return <HomeRouter />;
	}
}
