import React, { Fragment, useState, useEffect, memo } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LoadingView from "#containers/loading/LoadingView";
import ColorStripContainer from "#containers/color-strips/ColorStripContainer";
import ResponsiveImage from "#containers/image-containers/ResponsiveImage";
import { usePrevious } from "#hooks";

const initialState = {
  isImageReady: false,
  isColorsReady: false
};

const ImageWithColorStrip = props => {
  const { onPress, onStripPress, onStripLongPress, style, isStudio, image } = props;

  const [isImageReady, setIsImageReady] = useState(initialState.isImageReady);
  const [isColorsReady, setIsColorsReady] = useState(initialState.isColorsReady);

  const prevImage = usePrevious(image);

  useEffect(() => {
    if (prevImage && prevImage.id !== image.id) {
      setIsImageReady(false);
    }
  }, [image, prevImage]);

  const markImageReady = () => {
    setIsImageReady(true);
  };

  const markColorsReady = () => {
    setIsColorsReady(true);
  };

  const renderContent = () => {
    return (
      <Fragment>
        <ResponsiveImage src={image} onReady={markImageReady} />
        <ColorStripContainer
          image={image}
          onReady={markColorsReady}
          isStudio={isStudio}
          onPress={onStripPress}
          onLongPress={onStripLongPress}
        />
        {!(isColorsReady && isImageReady) && <LoadingView />}
      </Fragment>
    );
  };

  return onPress ? (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.8}>
      {renderContent()}
    </TouchableOpacity>
  ) : (
    <View style={style}>{renderContent()}</View>
  );
};

ImageWithColorStrip.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  style: PropTypes.object,
  isStudio: PropTypes.bool,
  image: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  onStripPress: PropTypes.func,
  onStripLongPress: PropTypes.func
};

ImageWithColorStrip.defaultProps = {
  isStudio: false,
  onPress: null,
  onLongPress: null,
  onStripPress: () => {},
  onStripLongPress: () => {},
  style: {}
};

export default memo(ImageWithColorStrip);
