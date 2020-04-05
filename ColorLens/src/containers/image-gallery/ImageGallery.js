import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import colors from "../../constants/colors";

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

const renderImages = props => {
  const { pressMethod, galleryOptions } = props;
  const cellSize = { width: `${100 / galleryOptions.rowSize}%`, height: galleryOptions.rowHeight };
  return props.images.map(imageCard.bind(null, { cellSize, pressMethod }));
};

const renderContent = props => (props.images.length ? renderImages(props) : []);

const ImageGallery = props => {
  if (props.galleryOptions) {
    rowSizeRange(props.galleryOptions.rowSize);
  }

  return (
    <ScrollableList isLazy columns={props.galleryOptions.rowSize}>
      {renderContent(props)}
    </ScrollableList>
  );
};

ImageGallery.defaultProps = { galleryOptions: { rowSize: 2 } };

const rowSizeRange = rowSize => {
  if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
    return;
  }
  return new Error(
    `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${rowSize}`
  );
};

export default ImageGallery;

const style = StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: "#fff"
  },
  selectedImageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: colors.selectedBorder
  }
});
