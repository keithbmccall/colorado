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
	Modal,
	StatusBar
} from "react-native";
import PixelColor from "react-native-pixel-color";
import { getPixelRGBA } from "react-native-get-pixel";
//
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../Style";
//
import Loading from "../../Loading";
import InspectTools from "./inspect/InspectTools";
import InspectImage from "./inspect/InspectImage";

export default class InspectModal extends Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}
	findColor = (e, image) => {
		console.log("image", image);
		getPixelRGBA(image, e.nativeEvent.locationX, e.nativeEvent.locationY)
			.then(color => console.log("QQQQQWWW", color)) // [243, 123, 0]
			.catch(err => {
				console.log("errorinsepect screen", err);
			});

		// let x = e.nativeEvent.locationX;
		// let y = e.nativeEvent.locationY;
		// PixelColor.getHex(image, { x, y })
		// 	.then(color => {
		// 		this.setColor(color);
		// 	})
		// 	.catch(err => {
		// 		console.log("error in inspectscreen.findcolor", err);
		// 	});
	};
	setColor = color => {
		this.setState({
			color: color
		});
	};
	render() {
		if (this.props.screenProps.currentImageMounted) {
			return (
				<View style={{ flex: 1, backgroundColor: "black" }}>
					<StatusBar barStyle="light-content" hidden={false} />
					<View style={style.statusPadding} />
					<View style={{ flex: 8, backgroundColor: "#333" }}>
						<InspectImage
							navigate={this.props.navigation.navigate}
							currentImage={this.props.screenProps.currentImage}
							toggleInspectModal={
								this.props.screenProps.toggleInspectModal
							}
							findColor={this.findColor}
						/>
					</View>
					<View
						style={{
							flex: 3
						}}
					>
						<InspectTools />
					</View>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
