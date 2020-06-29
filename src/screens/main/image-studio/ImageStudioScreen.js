import React, { useState, memo, useCallback } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import ImageStudio from "./components/ImageStudio";
import {
  // Buttons,
  Layout
} from "#containers";
import { studioActions } from "#store/actions";
import style from "./styles";
// import StudioInstructions from "./components/StudioInstructions";
import { ImageGallery } from "#containers";
import { ROW_DIMENSIONS } from "#enum";
import { studioSelectors } from "#selectors";
// import { SWITCH_COLUMNS } from "#constants";
import PropTypes from "prop-types";
// import { toggleRowSize } from "#utils";
import { navigateTo, CAMERA_ROLL, INSPECT, fromImageStudioScreen } from "#navigation";

const initialState = {
  galleryOptions: ROW_DIMENSIONS.rowSize3,
  editMode: false,
  sliderOptions: {
    starting: style.directionsWrapperPosition.bottom,
    ending: style.directionsWrapperPosition.top,
    key: "translateY"
  }
};

const ImageStudioScreen = props => {
  const { studioImage, studioImages, setImageStudioImage, navigation } = props;

  const [
    galleryOptions
    // setGalleryOptions
  ] = useState(initialState.galleryOptions);
  const [editMode, setEditMode] = useState(initialState.editMode);
  // const [sliderOptions] = useState(initialState.sliderOptions);

  // const toggleGalleryOptions = useCallback(() => {
  //   setGalleryOptions(toggleRowSize(galleryOptions.rowSize));
  // }, [galleryOptions.rowSize]);

  const toggleEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  const inspectColorSwatch = useCallback(
    (color, colorIndex) => {
      navigateTo(
        navigation,
        CAMERA_ROLL,
        fromImageStudioScreen({ color, colorIndex, type: INSPECT })
      );
    },
    [navigation]
  );

  const updateColorSwatch = useCallback((color, colorIndex) => {
    console.log("updating", color, colorIndex);
  }, []);

  const _setImageStudioImage = useCallback(image => setImageStudioImage(image), [
    setImageStudioImage
  ]);

  return (
    <Layout style={style.imageStudioWrapper}>
      <View style={style.imageStudioHeadingWrapper}>
        <Text style={style.imageStudioHeading}>Studio</Text>
      </View>
      <ImageStudio
        image={studioImage}
        editMode={editMode}
        toggleEditMode={toggleEditMode}
        onPress={inspectColorSwatch}
        onLongPress={updateColorSwatch}
      />
      <ImageGallery
        images={studioImages}
        galleryOptions={galleryOptions}
        onPress={_setImageStudioImage}
        style={style.imageStudioGalleryWrapper}
        isStudio
      />
      {/*<Buttons.BottomButtonBar*/}
      {/*  label={SWITCH_COLUMNS}*/}
      {/*  onPress={toggleGalleryOptions}*/}
      {/*  style={style.buttonBarWrapper}*/}
      {/*  labelStyle={style.buttonBarLabel}*/}
      {/*/>*/}
      {/*<StudioInstructions editMode={editMode} sliderOptions={sliderOptions} />*/}
    </Layout>
  );
};

ImageStudioScreen.propTypes = {
  // redux
  studioImages: PropTypes.array.isRequired,
  studioImage: PropTypes.object.isRequired,
  setImageStudioImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  studioImages: studioSelectors.studioImagesSelector(state),
  studioImage: studioSelectors.imageStudioImageSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setImageStudioImage: image => dispatch(studioActions.setImageStudioImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ImageStudioScreen));
