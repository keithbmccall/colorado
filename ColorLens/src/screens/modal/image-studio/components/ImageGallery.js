import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { LoadingView } from "shared/containers";
import { ScrollableList, ResponsiveImage } from "shared/tools";

export default class ImageGallery extends Component {
  constructor() {
    super();
    this.state = {
      galleryDetails: {
        rowSize: 3,
        rowHeight: 120
      }
    };
  }
  renderPhotos = () => {
    const { rowSize, rowHeight } = this.state.galleryDetails;
    const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
    const responsiveImageComponent = (image, key) => (
      <TouchableOpacity
        underlayColor="transparent"
        style={cellSize}
        onPress={() => console.log("image: ", image)}
        key={key}
      >
        <ResponsiveImage src={image.node.image.uri} />
      </TouchableOpacity>
    );

    return this.props.photos.length ? this.props.photos.map(responsiveImageComponent) : <LoadingView />;
  };
  render() {
    const cameraRollPhotos = this.renderPhotos();
    return (
      <View style={{ backgroundColor: "#ddd", height: "50%" }}>
        <ScrollableList lazy={true}>{cameraRollPhotos}</ScrollableList>
      </View>
    );
  }
}
