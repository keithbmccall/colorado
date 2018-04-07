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
	resetSwatchHandler = () => {
		this.props.toggleInspectModal();
		this.props.resetSwatches();
	};

	render() {
		if (this.props.currentImageMounted && this.props.swatchesLoaded) {
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
									onPress={this.resetSwatchHandler}
									underlayColor="transparent"
								/>
							</View>
						</View>
						<InspectImage
							currentImage={this.props.currentImage}
							findColor={this.props.findColor}
							onCurrentImageLayout={
								this.props.onCurrentImageLayout
							}
						/>
					</View>
					<View
						style={{
							flex: 5
						}}
					>
						<InspectTools
							resetSetColor={this.props.resetSetColor}
							color1={this.props.color1}
							color2={this.props.color2}
							color3={this.props.color3}
							color4={this.props.color4}
							color5={this.props.color5}
							color6={this.props.color6}
						/>
					</View>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
