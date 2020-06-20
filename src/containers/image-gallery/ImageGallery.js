import React, { useEffect, memo } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { conditionalListReverse, rowSizeRangeValidator } from "#utils";
import { ImageWithColorStrip } from "#containers";
import defaultStyle from "./styles";
import { ROW_DIMENSIONS } from "#enum";

const _onPress = ({ image, onPress }) => () => onPress(image);

const renderStudioGallery = ({ onPress, images, cellSize }) => {
  return images.map((image, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={{ ...defaultStyle.imageWrapper, ...cellSize }}
        onPress={_onPress({ image, onPress })}
      >
        <ImageWithColorStrip image={image} />
      </TouchableOpacity>
    );
  });
};

const renderImageGallery = ({ onPress, images, cellSize }) => {
  return images.map((image, key) => {
    const imageCardStyle = image.isSelected
      ? defaultStyle.selectedImageWrapper
      : defaultStyle.imageWrapper;

    return (
      <TouchableOpacity
        key={key}
        style={{ ...imageCardStyle, ...cellSize }}
        onPress={_onPress({ image, onPress })}
      >
        <ResponsiveImage src={image} />
      </TouchableOpacity>
    );
  });
};

const renderContent = props => {
  const { isStudio } = props;
  const imageList = isStudio ? renderStudioGallery(props) : renderImageGallery(props);

  return conditionalListReverse({
    list: imageList,
    test: isStudio
  });
};

const ImageGallery = props => {
  const {
    isStudio,
    galleryOptions: { rowSize, rowHeight }
  } = props;
  const cellSize = {
    width: `${100 / rowSize}%`,
    height: rowHeight
  };

  useEffect(() => {
    rowSizeRangeValidator(rowSize);
  }, [rowSize]);

  return (
    <ConditionalWrapper enable={isStudio} style={defaultStyle.studioGalleryWrapper}>
      <ScrollableList isLazy columns={rowSize}>
        {renderContent({ ...props, cellSize })}
      </ScrollableList>
    </ConditionalWrapper>
  );
};

ImageGallery.propTypes = {
  galleryOptions: PropTypes.exact({
    rowSize: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired
  }),
  isStudio: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPress: PropTypes.func
};

ImageGallery.defaultProps = {
  galleryOptions: ROW_DIMENSIONS.rowSize2,
  isStudio: false,
  onPress: () => {}
};

export default memo(ImageGallery);
