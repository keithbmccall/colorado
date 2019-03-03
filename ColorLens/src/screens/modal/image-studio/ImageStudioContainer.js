import React, { Component } from "react";
import { CameraRoll, View } from "react-native";

import ImageGallery from "./components/ImageGallery";
import FocusedImage from "./components/FocusedImage";

import style from "./styles";
export default class ImageStudioContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      focusedPhoto: { valid: false, photo: "", type: "" },
      pageInfo: {}
    };
  }

  getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    });
    this.setState({
      photos: photos.edges,
      focusedPhoto: { valid: true, photo: photos.edges[0], type: "camera-roll" },
      pageInfo: photos.page_info
    });
  };

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <View style={style.imageStudioContainer}>
        <FocusedImage focusedPhoto={this.state.focusedPhoto} />
        <ImageGallery photos={this.state.photos} />
      </View>
    );
  }
}
