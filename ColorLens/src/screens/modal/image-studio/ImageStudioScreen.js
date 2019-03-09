import React, { PureComponent, Fragment } from "react";
import { CameraRoll, View } from "react-native";
import ImageGallery from "./components/ImageGallery";
import FocusedImage from "./components/FocusedImage";
import { SliderView } from "shared/tools";
import style from "./styles";

export default class ImageStudioScreen extends PureComponent {
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
  setPhotos = photos =>
    this.setState(
      {
        photos: photos.edges.map(this.buildPhotoObject),
        pageInfo: photos.page_info
      },
      this.setFocusedImage(this.buildPhotoObject(photos.edges[0]))
    );
  getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    });
    this.setPhotos(photos);
  };
  setFocusedImage = image => {
    this.setState({
      focusedPhoto: {
        valid: true,
        photo: {
          id: image.id,
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
      <View style={{ flex: 1 }}>
        <SliderView
          contentTop={() => (
          
              <FocusedImage focusedPhoto={this.state.focusedPhoto} />
              
          )}
          contentBottom={()=><ImageGallery
            photos={this.state.photos}
            galleryOptions={this.state.galleryOptions}
            setFocusedImage={this.setFocusedImage}
          />}
        />
      </View>
    );
  }
  componentDidMount() {
    this.getPhotos();
  }
}
