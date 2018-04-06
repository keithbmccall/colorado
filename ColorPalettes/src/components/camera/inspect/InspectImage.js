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
	StatusBar,
	PanResponder
} from "react-native";

//
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";

const { width, height } = Dimensions.get("window");

export default class InspectImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: this.props.currentImage
		};
	}
	UNSAFE_componentWillMount() {
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (e, gestureState) => true,
			onPanResponderMove: (e, gestureState) => {
				console.log(
					"touch",
					e.nativeEvent.locationX,
					e.nativeEvent.locationY
				);
			},
			onPanResponderRelease: (e, gestureState) => {
				this.props.findColor(e, this.state.currentImage);
			}
		});
	}
	render() {
		return (
			<View style={style.flex1} {...this.panResponder.panHandlers}>
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
							onPress={() => this.props.navigate("Camera")}
							underlayColor="transparent"
						/>
					</View>
				</View>
				<Image
					style={{
						flex: 1,
						resizeMode: "contain"
					}}
					source={{
						uri: this.props.currentImage.uri
					}}
				/>
			</View>
		);
	}
}
