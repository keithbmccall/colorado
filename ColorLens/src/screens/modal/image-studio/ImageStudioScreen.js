import React, { Component } from "react";
import { CameraRoll, View } from "react-native";
import ImageGallery from "./components/ImageGallery";
import FocusedImage from "./components/FocusedImage";
import { LoadingView } from "shared/containers";

import style from "./styles";
export default class ImageStudioScreen extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      focusedPhoto: { valid: false, photo: { uri: "" }, type: "" },
      pageInfo: {},
      galleryOptions: {
        rowSize: 2,
        rowHeight: 220
      }
    };
  }
  buildPhotoObject = photo => {
    photo.id = photo.node.timestamp;
    photo.uri = photo.node.image.uri;
    return photo;
  };
  getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    });
    this.setState({
      photos: photos.edges.map(this.buildPhotoObject),
      focusedPhoto: {
        valid: true,
        photo: this.buildPhotoObject(photos.edges[0]),
        type: "camera-roll"
      },
      pageInfo: photos.page_info
    });
  };
  setFocusedImage = image => {
    console.log("setfocused", image);
    this.setState({
      focusedPhoto: {
        photo: {
          uri: image.uri
        }
      }
    });
  };
  setSwatches = () => {
    this.setState({});
  };

  render() {
    return (
      <View style={style.imageStudioContainer}>
        <FocusedImage focusedPhoto={this.state.focusedPhoto} />
        <ImageGallery
          photos={this.state.photos}
          galleryOptions={this.state.galleryOptions}
          setFocusedImage={this.setFocusedImage}
        />
      </View>
    );
  }
  componentDidMount() {
    this.getPhotos();
  }
}
