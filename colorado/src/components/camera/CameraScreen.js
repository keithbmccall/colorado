import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	TouchableOpacity,
	CameraRoll
} from "react-native";
import { RNCamera } from "react-native-camera";
import styles from "../../Styles";

//https://github.com/react-native-community/react-native-camera/blob/HEAD/docs/RNCamera.md
//taken from RNCamera documentation
export default class CameraScreen extends Component {
	constructor() {
		super();
		this.state = {
			cameraType: RNCamera.Constants.Type.back,
			flashMode: RNCamera.Constants.FlashMode.off,
			whiteBalance: RNCamera.Constants.WhiteBalance.auto
		};
	}
	takePicture = async function() {
		if (this.camera) {
			const options = { quality: 0.5, base64: true };
			const data = await this.camera.takePictureAsync(options);
			console.log("cameradata", data);
		}
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					backgroundColor: "black"
				}}
			>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={this.state.cameraType}
					flashMode={this.state.flashMode}
					whiteBalance={this.state.whiteBalance}
					permissionDialogTitle={"Permission to use camera"}
					permissionDialogMessage={
						"We need your permission to use your camera phone"
					}
				/>
				<View
					style={{
						flex: 0,
						flexDirection: "row",
						justifyContent: "center"
					}}
				>
					<TouchableOpacity
						onPress={this.takePicture.bind(this)}
						style={styles.capture}
					>
						<Text style={{ fontSize: 14 }}> SNAP </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: "column",
// 		backgroundColor: "black"
// 	}
// }
// );
