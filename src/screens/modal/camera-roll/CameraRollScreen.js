import React, { useState, useEffect, useCallback, memo } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCameraRollOptions, renderButtonText, selectOrUnselectImage } from "./methods";
import { ImageGallery, AnimatedView, Buttons, Text } from "#containers";
import { cameraRollActions, studioActions } from "#store/actions";
import { ROW_DIMENSIONS } from "#enum";
import style from "./styles";
import { cameraRollSelectors } from "#selectors";
import { navigateTo, STUDIO, fromCameraRollScreen } from "#navigation";

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
  const {
    images,
    selectedImages,
    fetchCameraRollImages,
    saveImageState,
    unselectAllImages,
    saveImagesToStudio,
    navigation
  } = props;

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

  const selectImage = useCallback(
    async image => {
      const { images: _images, selectedImages: _selectedImages } = selectOrUnselectImage({
        images,
        selectedImages,
        image
      });

      await saveImageState({ images: _images, selectedImages: _selectedImages });
    },
    [images, saveImageState, selectedImages]
  );

  const confirmSelectedImages = useCallback(async () => {
    await saveImagesToStudio(selectedImages);
    navigateTo(navigation, STUDIO, fromCameraRollScreen({ selectedImages }));
    unselectAllImages();
  }, [navigation, saveImagesToStudio, selectedImages, unselectAllImages]);

  return (
    <View style={style.cameraRollScreenWrapper}>
      <Text.Title>CameraRoll</Text.Title>
      <ImageGallery images={images} galleryOptions={galleryOptions} onPress={selectImage} />
      <AnimatedView
        style={style.animatedViewSlider}
        animation={sliderOptions}
        shouldLaunch={shouldConfirmMenuOpen}
      >
        <Buttons.Full pressMethod={confirmSelectedImages} innerText={renderButtonText(images)} />
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
  unselectAllImages: PropTypes.func.isRequired
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
  unselectAllImages: () => dispatch(cameraRollActions.unselectAllImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(CameraRollScreen));
