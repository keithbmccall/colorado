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
//
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";
//
import Loading from "../../../Loading";
import InspectTools from "./InspectTools";
import InspectImage from "./InspectImage";

export default class inspectScreen extends Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}
	findColor = (e, image) => {
		console.log("image", image);
		// getPixelRGBA(
		// 	image.uri,
		// 	e.nativeEvent.locationX,
		// 	e.nativeEvent.locationY
		// )
		// 	.then(color => console.log("QQQQQWWW", color)) // [243, 123, 0]
		// 	.catch(err => {
		// 		console.log("errorinsepect screen", err);
		// 	});

		let x = e.nativeEvent.locationX;
		let y = e.nativeEvent.locationY;
		PixelColor.getHex(image.uri, { x, y })
			.then(color => {
				this.setColor(color);
			})
			.catch(err => {
				console.log("error in inspectscreen.findcolor", err);
			});
	};
	setColor = color => {
		this.setState({
			color: color
		});
	};
	render() {
		if (this.props.currentImageMounted) {
			return (
				<View style={{ flex: 1, backgroundColor: "black" }}>
					<StatusBar barStyle="light-content" hidden={false} />
					<View style={style.statusPadding} />
					<View style={{ flex: 8, backgroundColor: "#333" }}>
						<InspectImage
							currentImage={this.props.currentImage}
							toggleInspectModal={this.props.toggleInspectModal}
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
