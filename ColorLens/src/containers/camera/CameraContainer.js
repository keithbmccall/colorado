import React, { Component, Fragment } from "react";
import { RNCamera } from "react-native-camera";
import CameraOptions from "./components/CameraOptions";
import style from "./styles";
//
export default class CameraContainer extends Component {
  constructor() {
    super();
    this.state = {
      autoFocus: RNCamera.Constants.AutoFocus.on,
      flashMode: RNCamera.Constants.FlashMode.off,
      whiteBalance: RNCamera.Constants.WhiteBalance.auto,
      type: RNCamera.Constants.Type.back,
      zoom: 0
    };
  }
  launchModal = () => this.props.navigation.navigate("Modal");
  //  
  // takePicture = async function() {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };
  takePicture = ()=>this.launchModal()
  
  render() {
    const { autoFocus, flashMode, whiteBalance, type, zoom } = this.state;
    return (
      <Fragment>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={style.cameraView}
          type={type}
          flashMode={flashMode}
          whiteBalance={whiteBalance}
          zoom={zoom}
          autoFocus={autoFocus}
          captureAudio={false}
        />
        <CameraOptions takePicture={this.takePicture} />
      </Fragment>
    );
  }
}
