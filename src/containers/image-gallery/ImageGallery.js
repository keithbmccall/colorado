import React, { useEffect, memo } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { conditionalListReverse, rowSizeRangeValidator } from "#utils";
import { ImageWithColorStrip } from "#containers";
import style from "./styles";
import { ROW_DIMENSIONS } from "#enum";

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

  const _onPress = ({ image, onPress }) => () => onPress(image);

  const renderStudioGallery = () => {
    const { onPress, images } = props;

    return images.map((image, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={{ ...style.imageWrapper, ...cellSize }}
          onPress={_onPress({ image, onPress })}
        >
          <ImageWithColorStrip image={image} />
        </TouchableOpacity>
      );
    });
  };

  const renderImageGallery = () => {
    const { onPress, images } = props;
    return images.map((image, key) => {
      const imageCardStyle = image.isSelected ? style.selectedImageWrapper : style.imageWrapper;

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

  const renderContent = () => {
    const imageList = isStudio ? renderStudioGallery() : renderImageGallery();

    return conditionalListReverse({
      list: imageList,
      test: isStudio
    });
  };

  return (
    <ConditionalWrapper enable={isStudio} style={style.studioGalleryWrapper}>
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
