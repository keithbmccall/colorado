import React, { useState, useEffect, memo } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  confirmSelectedImages,
  getCameraRollOptions,
  renderButtonText,
  selectImage
} from "./methods";
import { ImageGallery, AnimatedView, Buttons } from "#containers";
import { cameraRollActions, studioActions } from "#store/actions";
import { ROW_DIMENSIONS } from "#enum";
import style from "./styles";
import { cameraRollSelectors } from "#selectors";

const initialState = {
  sliderOptions: {
    key: "translateY",
    starting: style.animatedViewPosition.bottom,
    ending: style.animatedViewPosition.top
  },
  galleryOptions: ROW_DIMENSIONS.rowSize4,
  shouldConfirmMenuOpen: false
};

const CameraRollScreen = props => {
  const { images, selectedImages, fetchCameraRollImages } = props;

  const [shouldConfirmMenuOpen, setShouldConfirmMenuOpen] = useState(
    initialState.shouldConfirmMenuOpen
  );
  const [galleryOptions] = useState(initialState.galleryOptions);
  const [sliderOptions] = useState(initialState.sliderOptions);

  useEffect(() => {
    fetchCameraRollImages(getCameraRollOptions());
  }, [fetchCameraRollImages]);

  useEffect(() => {
    setShouldConfirmMenuOpen(!!selectedImages.length);
  }, [selectedImages]);

  return (
    <View style={style.cameraRollScreenWrapper}>
      <Text style={style.titleText}>CameraRoll</Text>
      <ImageGallery images={images} galleryOptions={galleryOptions} onPress={selectImage(props)} />
      <AnimatedView
        style={style.animatedViewSlider}
        animation={sliderOptions}
        shouldLaunch={shouldConfirmMenuOpen}
      >
        <Buttons.FullWidthButton
          pressMethod={confirmSelectedImages(props)}
          innerText={renderButtonText(images)}
          style={{}}
          textStyle={{ ...style.animatedViewText }}
        />
      </AnimatedView>
    </View>
  );
};

CameraRollScreen.defaultProps = {
  navigation: {}
};

CameraRollScreen.propTypes = {
  navigation: PropTypes.object,
  // redux
  images: PropTypes.array.isRequired,
  selectedImages: PropTypes.array.isRequired,
  fetchCameraRollImages: PropTypes.func.isRequired,
  saveImageState: PropTypes.func.isRequired,
  saveImagesToStudio: PropTypes.func.isRequired,
  unselectImages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  images: cameraRollSelectors.cameraImagesSelector(state),
  selectedImages: cameraRollSelectors.selectedImagesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCameraRollImages: options => dispatch(cameraRollActions.fetchCameraImages(options)),
  saveImageState: ({ images, selectedImages }) =>
    dispatch(cameraRollActions.saveImageState({ images, selectedImages })),
  saveImagesToStudio: selectedImages => dispatch(studioActions.saveImagesToStudio(selectedImages)),
  unselectImages: () => dispatch(cameraRollActions.unselectAllImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(CameraRollScreen));
