import React, { useEffect, memo, useCallback, useMemo } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ResponsiveImage from "#containers/image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { rowSizeRangeValidator } from "#utils/validators.util";
import { conditionalListReverse } from "#utils/general.util";
import ImageWithColorStrip from "#containers/image-with-color-strip/ImageWithColorStrip";
import defaultStyle from "./styles";
import { ROW_DIMENSIONS } from "#enum/row-dimensions";

const renderStudioGallery = props => {
  const { images, onPress, cellSize } = props;
  return images.map((image, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={{ ...defaultStyle.imageWrapper, ...cellSize }}
        onPress={() => onPress(image)}
      >
        <ImageWithColorStrip image={image} />
      </TouchableOpacity>
    );
  });
};

const renderImageGallery = props => {
  const { images, onPress, cellSize } = props;
  return images.map((image, key) => {
    const imageCardStyle = image.isSelected
      ? defaultStyle.selectedImageWrapper
      : defaultStyle.imageWrapper;

    return (
      <TouchableOpacity
        key={key}
        style={{ ...imageCardStyle, ...cellSize }}
        onPress={() => onPress(image)}
      >
        <ResponsiveImage src={image} />
      </TouchableOpacity>
    );
  });
};

const ImageGallery = props => {
  const {
    isStudio,
    galleryOptions: { rowSize, rowHeight },
    style
  } = props;
  const cellSize = useMemo(
    () => ({
      width: `${100 / rowSize}%`,
      height: rowHeight
    }),
    [rowHeight, rowSize]
  );

  useEffect(() => {
    rowSizeRangeValidator(rowSize);
  }, [rowSize]);

  const renderContent = useCallback(() => {
    const imageList = isStudio
      ? renderStudioGallery({ ...props, cellSize })
      : renderImageGallery({ ...props, cellSize });

    return conditionalListReverse({
      list: imageList,
      test: isStudio
    });
  }, [cellSize, isStudio, props]);

  return (
    <ConditionalWrapper enable={isStudio} style={style}>
      <ScrollableList isLazy columns={rowSize}>
        {renderContent()}
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
