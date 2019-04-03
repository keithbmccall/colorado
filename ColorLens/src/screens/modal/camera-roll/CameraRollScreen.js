import React, { PureComponent } from "react";
import { CameraRoll, View, Text, Dimensions } from "react-native";
import { ImageGallery } from "shared/containers";
import { Buttons } from "shared/tools";
import { checkPhotos, checkSelectedImages, buildPhotoObject } from "./methods";

export default class CameraRollScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      photos: [],
      galleryOptions: {
        rowSize: 4,
        rowHeight: 110
      },
      selectedImages: []
    };
  }
  confirmSelected = ()=>{
    console.log('...confirming...')
  }
  checkIsSelected = (stateName, image) => {
    if (stateName === "photos") {
      return checkPhotos(this.state.photos, image);
    } else if (stateName === "selectedImages") {
      return checkSelectedImages(this.state.selectedImages, image);
    } else {
      console.log("error");
      return [];
    }
  };

  selectImage = image =>
    this.setState({
      selectedImages: this.checkIsSelected("selectedImages", image),
      photos: this.checkIsSelected("photos", image)
    });

  setPhotos = photos =>
    this.setState({
      photos: photos.edges.map(buildPhotoObject),
      pageInfo: photos.page_info
    });

  getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos"
    });
    this.setPhotos(photos);
  };

  render() {
    //  testing rendering of button
    const renderCount = this.state.selectedImages.length
      ? `(${this.state.selectedImages.length}) images selected.`
      : "";

    // finish testing

    return (
      <View style={{ flex: 1 }}>
        <Text>CameraRoll {renderCount}</Text>

        <ImageGallery
          photos={this.state.photos}
          galleryOptions={this.state.galleryOptions}
          pressMethod={this.selectImage}
        />
      </View>
    );
  }
  componentDidMount() {
    this.getPhotos();
  }
}
