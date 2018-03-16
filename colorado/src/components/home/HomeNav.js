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
import Icon from "react-native-vector-icons/Entypo";
import styles from "../../Styles";

export default class HomeNav extends Component {
	render() {
		return (
			<View style={styles.navContainer}>
				<View style={styles.navStatus} />
				<View style={styles.navRow}>
					<View style={{ marginLeft: "2%" }}>
						<Icon.Button
							name="camera"
							backgroundColor="transparent"
							color="#91268d"
							onPress={() => this.props.navigate("Camera")}
						/>
					</View>
					<View style={styles.navItemContainer}>
						<Text>Logo</Text>
					</View>
					<View style={{ marginRight: "1%" }}>
						<Icon.Button
							name="palette"
							backgroundColor="transparent"
							color="#91268d"
							onPress={() => this.props.navigate("Library")}
						/>
					</View>
				</View>
			</View>
		);
	}
}
