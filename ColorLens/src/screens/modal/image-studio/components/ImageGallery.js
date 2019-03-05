import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { LoadingView, ImageWithColorStrip } from "shared/containers";
import { ScrollableList } from "shared/tools";
import style from "../styles";

const renderPhotos = props => {
  const imageCard = (image, key) => {
    const { rowSize, rowHeight } = props.galleryOptions;
    const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
    return (
      <TouchableOpacity
        underlayColor="transparent"
        style={[style.galleryImageWrapper, cellSize]}
        onPress={() => props.setFocusedImage(image)}
        key={key}
      >
        <ImageWithColorStrip src={image.uri} />
      </TouchableOpacity>
    );
  };

  return props.photos.map(imageCard);
};

const renderContent = props =>
  props.photos.length ? renderPhotos(props) : <LoadingView />;

const ImageGallery = props => (
  <View style={{ backgroundColor: "#ddd", height: "50%", width: "100%" }}>
    <ScrollableList lazy={true} columns={props.galleryOptions.rowSize}>
      {renderContent(props)}
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
  photos: PropTypes.array.isRequired,
  setFocusedImage: PropTypes.func.isRequired,
  galleryOptions: PropTypes.shape({
    rowSize: rowSizeRange,
    rowHeight: PropTypes.number.isRequired
  })
};
export default ImageGallery;
