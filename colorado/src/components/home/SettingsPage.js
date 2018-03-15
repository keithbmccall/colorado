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
	Keyboard
} from "react-native";
import styles from "../../Styles";
import { RNCamera } from "react-native-camera";

import HomeNav from "./HomeNav";
//

export default class SettingsPage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<View style={styles.homeScreen}>
				<HomeNav />
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					permissionDialogTitle={"Permission to use camera"}
					permissionDialogMessage={
						"We need your permission to use your camera phone"
					}
					style={{ flex: 9 }}
				>
					<View
						style={{
							flex: 9,
							alignItems: "center"
						}}
					>
						<ScrollView
							showsVerticalScrollIndicator={false}
							style={{
								flex: 1,
								width: "100%"
							}}
						>
							<View
								style={{
									flex: 1,
									alignItems: "center",
									marginTop: 30
								}}
							>
								<Text
									style={[
										styles.textHeader,
										{ color: "white" }
									]}
								>
									Compare
								</Text>

								<Text style={[styles.text, { color: "white" }]}>
									{this.props.screenProps.colorText.toUpperCase()}
								</Text>
								<View
									style={{
										width: "40%",
										height: 150,
										marginTop: 200,
										marginBottom: 50,
										backgroundColor: this.props.screenProps
											.bigColor,
										borderRadius: 10,
										alignItems: "center"
									}}
								/>
							</View>
						</ScrollView>
					</View>
				</RNCamera>
			</View>
		);
	}
}
