import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { LoadingView, ImageWithColorStrip } from "shared/containers";
import { ScrollableList } from "shared/tools";
import style from "../styles";

const imageCard = (renderPhotoProps, image, key) => (
  <ImageWithColorStrip
    src={image.uri}
    pressMethod={renderPhotoProps.setFocusedImage.bind(null, image)}
    style={[style.imageContentWrapper, renderPhotoProps.cellSize]}
    key={key}
  />
);

const renderPhotos = props => {
  const { setFocusedImage, galleryOptions } = props;
  const { rowSize, rowHeight } = galleryOptions;
  const cellSize = { width: `${100 / rowSize}%`, height: rowHeight };
  return props.photos.map(imageCard.bind(null, { cellSize, setFocusedImage }));
};

const renderContent = props => (props.photos.length ? renderPhotos(props) : []);

const StudioGallery = props => (
  <ScrollableList isLazy={true} columns={props.galleryOptions.rowSize}>
    {renderContent(props)}
  </ScrollableList>
);

StudioGallery.defaultProps = { galleryOptions: { rowSize: 2 } };

// PROPTYPES
const rowSizeRange = (props, propName, componentName) => {
  if (typeof props[propName] === "number") {
    if (props[propName] === 2 || props[propName] === 3 || props[propName] === 4) {
      return;
    }
  }
  return new Error(
    `Invalid prop '${propName}' supplied to '${componentName}'. Expected a Number of value '2' or '3' but received: ${
      props[propName]
    }`
  );
};
StudioGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  setFocusedImage: PropTypes.func,
  galleryOptions: PropTypes.shape({
    rowSize: rowSizeRange,
    rowHeight: PropTypes.number.isRequired
  })
};

export default StudioGallery;