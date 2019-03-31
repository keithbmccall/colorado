import React, { PureComponent } from "react";
import { CameraRoll, View, Text, Dimensions } from "react-native";
import { ImageGallery } from "shared/containers";
import { Buttons } from "shared/tools";

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
  checkIsSelected = (stateName, image) => {
    if (stateName === "photos") {
      let photosArray = this.state.photos.slice(0);
      photosArray[image.tempId].isSelected = !photosArray[image.tempId].isSelected;
      return photosArray;
    } else if (stateName === "selectedImages") {
      let selectedArray = this.state.selectedImages.slice(0);
      let n = selectedArray.indexOf(image);
      return n >= 0 ? selectedArray.splice(n, 1) && selectedArray : selectedArray.push(image) && selectedArray;
    } else {
      console.log("error");
      return [];
    }
  };
  selectImage = image => {
    this.setState({
      selectedImages: this.checkIsSelected("selectedImages", image),
      photos: this.checkIsSelected("photos", image)
    });
  };

  //
  buildPhotoObject = (photo, i) => {
    photo.tempId = i;
    photo.uri = photo.node.image.uri;
    photo.isSelected = false;
    return photo;
  };
  setPhotos = photos =>
    this.setState({
      photos: photos.edges.map(this.buildPhotoObject),
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

    // finis testing

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
