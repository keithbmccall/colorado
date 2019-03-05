import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ColorStripContainer } from "shared/containers";
import { ScrollableList, ResponsiveImage } from "shared/tools";
import style from "../styles";

const renderPhotos = props => {
  const imageCard = (image, key) => {
    const { rowSize, rowHeight } = props.galleryOptions;
    const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
    return (
      <TouchableOpacity
        underlayColor="transparent"
        style={[style.galleryImageWrapper, cellSize]}
        onPress={() => console.log("image: ", image)}
        key={key}
      >
        <ResponsiveImage src={image.uri} />
        <ColorStripContainer image={image.uri} />
      </TouchableOpacity>
    );
  };
  return props.photos.length ? props.photos.map(imageCard) : <LoadingView />;
};

const ImageGallery = props => (
  <View style={{ backgroundColor: "#ddd", height: "50%", width: "100%" }}>
    <ScrollableList lazy={true} columns={props.galleryOptions.rowSize}>
      {renderPhotos(props)}
    </ScrollableList>
  </View>
);

ImageGallery.defaultProps = { galleryOptions: { rowSize: 2 } };

// PROPTYPES
const rowSizeRange = (props, propName, componentName) => {
  if (typeof props[propName] === "number") {
    if (props[propName] === 2 || props[propName] === 3) {
      return;
    }
  }
  return new Error(
    `Invalid prop '${propName}' supplied to '${componentName}'. Expected a Number of value '2' or '3' but received: ${
      props[propName]
    }`
  );
};
ImageGallery.propTypes = {
  galleryOptions: PropTypes.shape({
    rowSize: rowSizeRange,
    rowHeight: PropTypes.number.isRequired
  })
};
export default ImageGallery;
