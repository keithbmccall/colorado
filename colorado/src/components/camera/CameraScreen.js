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
	CameraRoll,
	Slider
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
			whiteBalance: RNCamera.Constants.WhiteBalance.auto,
			zoom: 0
		};
		this.takePicture = this.takePicture.bind(this);
	}
	takePicture = async function() {
		if (this.camera) {
			const options = {
				quality: 1,
				base64: true,
				forceUpOrientation: true
			};
			const data = await this.camera.takePictureAsync(options);
			console.log("cameradata", data);
			CameraRoll.saveToCameraRoll(data.uri);
			this.props.screenProps.getImages();
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
				<View style={{ flex: 8 }}>
					<TouchableOpacity
						style={{ flex: 1 }}
						onPress={this.takePicture.bind(this)}
					>
						<RNCamera
							ref={ref => {
								this.camera = ref;
							}}
							style={styles.preview}
							type={this.state.cameraType}
							flashMode={this.state.flashMode}
							whiteBalance={this.state.whiteBalance}
							zoom={this.state.zoom}
							permissionDialogTitle={"Permission to use camera"}
							permissionDialogMessage={
								"We need your permission to use your camera phone"
							}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "row"
					}}
				/>
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
