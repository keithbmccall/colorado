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
//
const { width, height } = Dimensions.get("window");

export default class inspectModal extends Component {
	constructor() {
		super();
		this.state = {
			color1: { color: "transparent", border: "transparent" },
			color2: { color: "transparent", border: "transparent" },
			color3: { color: "transparent", border: "transparent" },
			color4: { color: "transparent", border: "transparent" },
			color5: { color: "transparent", border: "transparent" },
			color6: { color: "transparent", border: "transparent" },
			imageHeight: "",
			imageWidth: ""
		};
	}
	onLayout = ({ nativeEvent }) => {
		this.setState({
			imageWidth: nativeEvent.layout.width,
			imageHeight: nativeEvent.layout.height
		});
	};

	resetSetColor = color => {
		let colorToReset = Object.keys(this.state).find(
			key => this.state[key].color === color
		);
		this.setState({
			[colorToReset]: { color: "transparent", border: "white" }
		});
	};
	findColor = (e, image) => {
		let { imageHeight, imageWidth } = this.state;
		let x = e.nativeEvent.locationX;
		let y = e.nativeEvent.locationY;
		PixelColor.getHex(image.uri, {
			x,
			y,
			height: imageHeight,
			width: imageWidth
		})
			.then(color => {
				console.log("tis color", color);
				this.setColor(color);
			})
			.catch(err => {
				console.log("error in inspectscreen.findcolor", err);
			});
	};
	setColor = color => {
		if (this.state.color1.color === "transparent") {
			this.setState({
				color1: { color: color, border: color }
			});
		} else if (this.state.color2.color === "transparent") {
			this.setState({
				color2: { color: color, border: color }
			});
		} else if (this.state.color3.color === "transparent") {
			this.setState({
				color3: { color: color, border: color }
			});
		} else if (this.state.color4.color === "transparent") {
			this.setState({
				color4: { color: color, border: color }
			});
		} else if (this.state.color5.color === "transparent") {
			this.setState({
				color5: { color: color, border: color }
			});
		} else if (this.state.color6.color === "transparent") {
			this.setState({
				color6: { color: color, border: color }
			});
		} else {
			console.log("color blocks are full!");
		}
	};
	render() {
		if (this.props.currentImageMounted) {
			return (
				<View style={{ flex: 1, backgroundColor: "black" }}>
					<StatusBar barStyle="light-content" hidden={false} />
					<View style={style.statusPadding} />
					<View style={{ flex: 8, backgroundColor: "#333" }}>
						<View
							style={{
								height: height / 12,
								backgroundColor: "black",
								flexDirection: "row",
								justifyContent: "flex-end"
							}}
						>
							<View>
								<Icon.Button
									size={40}
									name="ios-close-circle"
									backgroundColor="transparent"
									color="#91268d"
									onPress={this.props.toggleInspectModal}
									underlayColor="transparent"
								/>
							</View>
						</View>
						<InspectImage
							setPreview={this.setPreview}
							currentImage={this.props.currentImage}
							findColor={this.findColor}
							onLayout={this.onLayout}
						/>
					</View>
					<View
						style={{
							flex: 5
						}}
					>
						<InspectTools
							resetSetColor={this.resetSetColor}
							color1={this.state.color1}
							color2={this.state.color2}
							color3={this.state.color3}
							color4={this.state.color4}
							color5={this.state.color5}
							color6={this.state.color6}
						/>
					</View>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
