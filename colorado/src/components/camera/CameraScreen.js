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
	TouchableHighlight,
	Dimensions,
	Modal
} from "react-native";
import { NavigationActions } from "react-navigation";
import { RNCamera } from "react-native-camera";
import SwatchesModal from "../home/SwatchesModal";
import SavePaletteModal from "../home/SavePaletteModal";
import styles from "../../Styles";

// const cameraToPhotos = NavigationActions.navigate({
// 	routeName: "Home",

// 	action: NavigationActions.navigate({ routeName: "Photos" })
// });

//https://github.com/react-native-community/react-native-camera/blob/HEAD/docs/RNCamera.md
//taken from RNCamera documentation
const { width, height } = Dimensions.get("window");

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
		this.renderCameraImages = this.renderCameraImages.bind(this);
		// this.cameraToImages = this.cameraToImages.bind(this);
	}
	getCameraImages() {
		this.props.screenProps.getImages();
	}
	renderCameraImages(image, key) {
		return (
			<TouchableHighlight
				key={key}
				underlayColor="transparent"
				onPress={() => this.props.screenProps.getSwatches(image, key)}
			>
				<Image
					style={{
						width: width / 9,
						height: width / 9
					}}
					source={{
						uri: image.node.image.uri
					}}
				/>
			</TouchableHighlight>
		);
	}
	// cameraToImages(e) {
	// 	e.preventDefault();
	// 	this.props.navigation.dispatch(cameraToPhotos);
	// 	console.log("go home - new");
	// }
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
		}
		this.getCameraImages();
	};
	render() {
		if (this.props.screenProps.imagesLoaded) {
			const images = this.props.screenProps.images.map(
				this.renderCameraImages
			);
			return (
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						backgroundColor: "black"
					}}
				>
					<View style={{ flex: 5 }}>
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
								permissionDialogTitle={
									"Permission to use camera"
								}
								permissionDialogMessage={
									"We need your permission to use your camera phone"
								}
							/>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							flexWrap: "wrap",
							paddingLeft: 10,
							paddingRight: 10
						}}
					>
						{images}
					</View>

					<Modal
						animationType="slide"
						transparent={false}
						visible={this.props.screenProps.saveModalOpen}
						presentationStyle="overFullScreen"
					>
						<SavePaletteModal
							saveModalToggle={
								this.props.screenProps.saveModalToggle
							}
							currentSwatches={
								this.props.screenProps.currentSwatches
							}
							navigate={this.props.screenProps.navigate}
							savePalette={this.props.screenProps.savePalette}
							saveModalClose={
								this.props.screenProps.saveModalClose
							}
							resetSwatchModal={
								this.props.screenProps.resetSwatchModal
							}
						/>
					</Modal>
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.props.screenProps.previewModalOpen}
					>
						<SwatchesModal
							currentSwatches={
								this.props.screenProps.currentSwatches
							}
							currentImage={this.props.screenProps.currentImage}
							saveModalToggle={
								this.props.screenProps.saveModalToggle
							}
							resetSwatchState={
								this.props.screenProps.resetSwatchState
							}
							swatchesLoaded={
								this.props.screenProps.swatchesLoaded
							}
						/>
					</Modal>
				</View>
			);
		}
		return <div>loading camera</div>;
	}
}
// <Button
// 							title="camera roll"
// 							onPress={this.cameraToImages}
// 						/>
