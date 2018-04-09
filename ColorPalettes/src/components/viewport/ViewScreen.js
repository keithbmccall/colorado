import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
	StatusBar
} from "react-native";
import { RNCamera } from "react-native-camera";
import ColorHelper from "color-to-name";
import pant from "nearest-pantone";
//
import Loading from "../../Loading";
import style from "../../Style";

export default class ViewScreen extends Component {
	render() {
		if (this.props.screenProps.viewportLoaded) {
			const { viewportColor } = this.props.screenProps;
			return (
				<View style={{ flex: 1 }}>
					<StatusBar hidden={false} />
					<RNCamera
						ref={ref => {
							this.camera = ref;
						}}
						style={style.preview}
						type={RNCamera.Constants.Type.back}
						permissionDialogTitle={"Permission to use camera"}
						permissionDialogMessage={
							"We need your permission to use your camera phone"
						}
					>
						<View
							style={{
								flex: 9,
								alignItems: "center"
							}}
						>
							<ScrollView
								showsVerticalScrollIndicator={false}
								style={{
									flex: 1,
									width: "100%"
								}}
							>
								<View
									style={{
										flex: 1,
										alignItems: "center",
										marginTop: 30
									}}
								>
									<Text
										style={[
											style.textHeader,
											{ color: "white", marginTop: 40 }
										]}
									>
										Viewport
									</Text>

									<Text
										style={{
											color: "white",
											marginTop: 20
										}}
									>
										{pant.getClosestColor(viewportColor)
											? pant
													.getClosestColor(
														viewportColor
													)
													.name.toUpperCase()
											: "BLACK"}
									</Text>
									<Text style={{ color: "white" }}>
										{viewportColor.toUpperCase()}
									</Text>
									<Text style={{ color: "white" }}>{`R: ${
										ColorHelper.hexToRGB(viewportColor).r
									} G: ${
										ColorHelper.hexToRGB(viewportColor).g
									} B: ${
										ColorHelper.hexToRGB(viewportColor).b
									}`}</Text>
									<Text style={{ color: "white" }}>
										{pant.getClosestColor(viewportColor)
											? `PANTONE\xAE ${
													pant.getClosestColor(
														viewportColor
													).pantone
											  }`
											: "No Pantone"}
									</Text>
									<View
										style={{
											width: 50,
											height: 150,
											marginTop: 200,
											marginBottom: 50,
											backgroundColor: viewportColor,
											borderRadius: 10,
											alignItems: "center"
										}}
									/>
								</View>
							</ScrollView>
						</View>
					</RNCamera>
				</View>
			);
		} else {
			return <Loading />;
		}
	}
}
