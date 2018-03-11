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

export default class HomeNav extends Component {
	render() {
		return (
			<View style={styles.navContainer}>
				<View style={styles.navStatus} />
				<View style={styles.navRow}>
					<View style={styles.navItemContainer}>
						<Text>Cam</Text>
					</View>
					<View style={styles.navItemContainer}>
						<Text>Logo</Text>
					</View>
					<View style={styles.navItemContainer}>
						<Text>Libr</Text>
					</View>
				</View>
			</View>
		);
	}
}
