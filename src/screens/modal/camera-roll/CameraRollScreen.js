import React, { useState, useEffect, memo } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { renderSelectedImageCount, selectOrUnselectImage } from "./utils";
import { ImageGallery, AnimatedView, Buttons } from "#containers";
import { cameraRollActions, studioActions } from "#store/actions";
import { defaultCameraRollOptionsEnum, ROW_DIMENSIONS } from "#enum";
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
  const reduxCameraImages = useSelector(cameraRollSelectors.cameraImagesSelector);
  const reduxSelectedImages = useSelector(cameraRollSelectors.selectedImagesSelector);
  const dispatch = useDispatch();

  const [shouldConfirmMenuOpen, setShouldConfirmMenuOpen] = useState(
    initialState.shouldConfirmMenuOpen
  );
  const [galleryOptions] = useState(initialState.galleryOptions);
  const [sliderOptions] = useState(initialState.sliderOptions);

  useEffect(() => {
    const fetchCameraRollImages = async () =>
      await dispatch(cameraRollActions.fetchCameraImages(getCameraRollOptions()));

    fetchCameraRollImages();
  }, [dispatch]);

  useEffect(() => {
    const toggleConfirmMenu = () => setShouldConfirmMenuOpen(!!reduxSelectedImages.length);

    toggleConfirmMenu();
  }, [reduxSelectedImages]);

  const getCameraRollOptions = () => {
    return defaultCameraRollOptionsEnum;
  };

  const renderButtonText = () => {
    return `Import ${renderSelectedImageCount(reduxCameraImages)} To The Studio`;
  };

  const selectImage = async image => {
    const { images, selectedImages } = selectOrUnselectImage({
      images: reduxCameraImages,
      selectedImages: reduxSelectedImages,
      image
    });

    await dispatch(cameraRollActions.saveImageState({ images, selectedImages }));
  };

  const confirmSelectedImages = async () => {
    const { navigation } = props;
    const { unselectAllImages } = cameraRollActions;
    const { saveImagesToStudio } = studioActions;

    await dispatch(saveImagesToStudio(reduxSelectedImages));
    navigation.navigate("Main", {
      screen: "Studio",
      params: {
        screen: "Modal",
        selectedImages: reduxSelectedImages
      }
    });
    dispatch(unselectAllImages());
  };

  return (
    <View style={style.cameraRollScreenWrapper}>
      <Text style={style.titleText}>CameraRoll</Text>
      <ImageGallery
        images={reduxCameraImages}
        galleryOptions={galleryOptions}
        onPress={selectImage}
      />
      <AnimatedView
        style={style.animatedViewSlider}
        animation={sliderOptions}
        shouldLaunch={shouldConfirmMenuOpen}
      >
        <Buttons.FullWidthButton
          pressMethod={confirmSelectedImages}
          innerText={renderButtonText()}
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
  navigation: PropTypes.object
};

export default memo(CameraRollScreen);
