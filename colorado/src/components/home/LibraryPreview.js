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
	Modal,
	TouchableHighlight
} from "react-native";
import LibraryPeek from "./LibraryPeek";
import Spinner from "react-native-spinkit";

import styles from "../../Styles";

export default class LibraryPreview extends Component {
	renderLibraryPeek(palette, key) {
		console.log("palettetest", palette);
		return <LibraryPeek palette={palette} key={key} />;
	}
	render() {
		if (this.props.palettesLoaded) {
			const libraryPeek = this.props.palettes
				.slice(0, 3)
				.map(this.renderLibraryPeek);
			return (
				<TouchableHighlight
					underlayColor="white"
					onPress={() => this.props.navigate("Library")}
					style={{
						width: "85%",
						height: 300,
						backgroundColor: "white",
						borderRadius: 10
					}}
				>
					<View style={{ flex: 1 }}>
						<Text style={styles.textHeader}>
							Your Recent Palettes
						</Text>

						{libraryPeek}
					</View>
				</TouchableHighlight>
			);
		}
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Spinner
					isVisible={true}
					color="#91268d"
					size={100}
					type="9CubeGrid"
				/>
			</View>
		);
	}
}
