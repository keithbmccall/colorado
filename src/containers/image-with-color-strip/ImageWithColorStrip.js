import React, { Fragment, useState, useEffect, memo } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LoadingView from "../../containers/loading/LoadingView";
import ColorStripContainer from "../../containers/color-strips/ColorStripContainer";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import { usePrevious } from "#hooks";

const ImageWithColorStrip = props => {
  const { onPress, onLongPress, style, isStudio, editMode, image } = props;

  const [isImageReady, setIsImageReady] = useState(false);
  const [isColorsReady, setIsColorsReady] = useState(false);

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
          editMode={editMode}
          isStudio={isStudio}
          onPress={onPress}
          onLongPress={onLongPress}
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
  editMode: PropTypes.bool,
  image: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
};

ImageWithColorStrip.defaultProps = {
  editMode: false,
  isStudio: false,
  onPress: null,
  onLongPress: null,
  style: {}
};

export default memo(ImageWithColorStrip);
