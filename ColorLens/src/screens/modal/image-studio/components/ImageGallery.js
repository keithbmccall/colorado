import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ScrollableList, ResponsiveImage } from "shared/tools";
import style from "../styles";

const ImageGallery = props => {
  renderPhotos = () => {
    const { rowSize, rowHeight } = props.galleryOptions;
    const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
    //
    const responsiveImageComponent = (image, key) => {
      console.log("lol", image);
      return (
        <TouchableOpacity
          underlayColor="transparent"
          style={[cellSize, style.colorStripImageWrapper]}
          onPress={() => console.log("image: ", image)}
          key={key}
        >
          <ResponsiveImage src={image.uri} />
          <ColorStripContainer image={image.uri} />
        </TouchableOpacity>
      );
    };

    return props.photos.length ? props.photos.map(responsiveImageComponent) : <LoadingView />;
  };

  //
  const cameraRollPhotos = renderPhotos();
  return (
    <View style={{ backgroundColor: "#ddd", height: "50%", width: "100%" }}>
      <ScrollableList lazy={true} columns={props.galleryOptions.rowSize}>
        {cameraRollPhotos}
      </ScrollableList>
    </View>
  );
};

export default ImageGallery;
