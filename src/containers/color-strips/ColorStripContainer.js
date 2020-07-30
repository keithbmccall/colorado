import React, { useState, useEffect, memo } from "react";
import API from "#helpers/api";
import ColorStrip from "#containers/color-strips/components/ColorStrip";
import PropTypes from "prop-types";
import { normalizeSwatches } from "#utils/swatch.util";
import LoadingView from "#containers/loading/LoadingView";
import { studioActions } from "#store/actions";
import { connect } from "react-redux";

const initialState = {
  isLoaded: false
};

const ColorStripContainer = props => {
  const {
    isStudio,
    onPress,
    onLongPress,
    image,
    onReady,
    setSwatchesOnImage,
    setSwatchesOnStudioImage,
    style
  } = props;

  const [isLoaded, setIsLoaded] = useState(initialState.isLoaded);

  useEffect(() => {
    const { swatches: hasSwatches = false, uri } = image;
    //    checks to see if image has swatches already,
    //    if not then it runs code to find the dominant colors
    if (hasSwatches) {
      setIsLoaded(true);
      if (onReady) {
        onReady();
      }
    } else {
      API.getPalette(uri, (error, newSwatches) => {
        const imageSwatches = {
          swatches: normalizeSwatches(newSwatches),
          image
        };
        if (error) {
          console.log("error in ColorStripContainer.API.getPalette", error);
          return;
        }
        if (isStudio) {
          setSwatchesOnStudioImage(imageSwatches);
        } else {
          setSwatchesOnImage(imageSwatches);
        }
      });
    }
  }, [image, isStudio, onReady, setSwatchesOnImage, setSwatchesOnStudioImage]);

  return isLoaded ? (
    <ColorStrip
      swatches={image.swatches}
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      isStudio
    />
  ) : (
    <LoadingView blank />
  );
};

ColorStripContainer.propTypes = {
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    swatches: PropTypes.object
  }).isRequired,
  onPress: PropTypes.func,
  onReady: PropTypes.func,
  isStudio: PropTypes.bool,
  onLongPress: PropTypes.func,
  style: PropTypes.object
};

ColorStripContainer.defaultProps = {
  style: {},
  quality: "medium",
  isStudio: false,
  onReady: null,
  onPress: null,
  onLongPress: null
};

const mapDispatchToProps = dispatch => ({
  setSwatchesOnStudioImage: swatches => dispatch(studioActions.setSwatchesOnStudioImage(swatches)),
  setSwatchesOnImage: swatches => dispatch(studioActions.setSwatchesOnImage(swatches))
});

export default connect(null, mapDispatchToProps)(memo(ColorStripContainer));
