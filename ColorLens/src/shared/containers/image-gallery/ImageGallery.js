import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { LoadingView } from "shared/containers";
import { ScrollableList, ResponsiveImage } from "shared/tools";
import { colors } from "../../constants";

const imageCard = (renderProps, image, key) => {
  const imageCardStyle = image.isSelected ? style.selectedImageWrapper : style.imageWrapper;
  return (
    <TouchableOpacity
      key={key}
      style={{ ...imageCardStyle, ...renderProps.cellSize }}
      onPress={() => renderProps.pressMethod(image)}
    >
      <ResponsiveImage src={image.uri} />
    </TouchableOpacity>
  );
};

const renderPhotos = props => {
  const { pressMethod, galleryOptions } = props;
  const { rowSize, rowHeight } = galleryOptions;
  const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
  return props.photos.map(imageCard.bind(null, { cellSize, pressMethod }));
};

const renderContent = props => (props.photos.length ? renderPhotos(props) : []);

const ImageGallery = props => (
  <ScrollableList isLazy={true} columns={props.galleryOptions.rowSize}>
    {renderContent(props)}
  </ScrollableList>
);

// ImageGallery.defaultProps = { galleryOptions: { rowSize: 2 } };

// // PROPTYPES
// const rowSizeRange = (props, propName, componentName) => {
//   if (typeof props[propName] === "number") {
//     if (props[propName] === 2 || props[propName] === 3 || props[propName] === 4) {
//       return;
//     }
//   }
//   return new Error(
//     `Invalid prop '${propName}' supplied to '${componentName}'. Expected a Number of value '2' or '3' but received: ${
//       props[propName]
//     }`
//   );
// };
// ImageGallery.propTypes = {
//   photos: PropTypes.array.isRequired,
//   pressMethod: PropTypes.func,
//   galleryOptions: PropTypes.shape({
//     rowSize: rowSizeRange,
//     rowHeight: PropTypes.number.isRequired
//   })
// };
export default ImageGallery;
const style = StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: "#fff"
  },
  selectedImageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: colors.selectedBorderColor
  }
});
