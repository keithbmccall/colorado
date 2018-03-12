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

export default class LibraryScreen extends Component {
	constructor() {
		super();
		this.state = {
			name: ""
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>LibraryScreen</Text>
				<KeyboardAvoidingView>
					<TextInput
						placeholder="name"
						style={{
							height: 40,
							width: 200,
							borderColor: "gray",
							borderWidth: 1,
							paddingLeft: 5
						}}
						keyboardType="default"
						onChangeText={name => this.setState({ name })}
						value={this.state.name}
						onSubmitEditing={Keyboard.dismiss}
					/>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
