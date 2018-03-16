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
import Logo from "../../images/logo_wordmark.png";

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
