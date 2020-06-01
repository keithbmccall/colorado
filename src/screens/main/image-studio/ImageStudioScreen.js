import React, { useState, memo } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import ImageStudio from "./components/ImageStudio";
import { Buttons, Layout } from "#containers";
import { studioActions } from "#store/actions";
import style from "./styles";
import StudioInstructions from "./components/StudioInstructions";
import { ImageGallery } from "#containers";
import { ROW_DIMENSIONS } from "#enum";
import { studioSelectors } from "#selectors";
import { SWITCH_COLUMNS } from "#constants";
import PropTypes from "prop-types";

const initialState = {
  galleryOptions: ROW_DIMENSIONS.rowSize2,
  editMode: false,
  sliderOptions: {
    starting: -style.directionsWrapper.height,
    ending: 30,
    key: "translateY"
  }
};

const ImageStudioScreen = props => {
  const { studioImage, studioImages } = props;

  const [galleryOptions, setGalleryOptions] = useState(initialState.galleryOptions);
  const [editMode, setEditMode] = useState(initialState.editMode);
  const [sliderOptions] = useState(initialState.sliderOptions);

  const toggleGalleryOptions = () => {
    const toggleRowSize = rowSize => {
      if (rowSize === 2) {
        return ROW_DIMENSIONS.rowSize3;
      }
      return ROW_DIMENSIONS.rowSize2;
    };

    setGalleryOptions(toggleRowSize(galleryOptions.rowSize));
  };

  const inspectColorSwatch = (color, colorIndex) => {
    console.log("inspecting", color, colorIndex);
  };

  const updateColorSwatch = (color, colorIndex) => {
    console.log("updating", color, colorIndex);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const setImageStudioImage = image => {
    props.setImageStudioImage(image);
  };

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
        onPress={setImageStudioImage}
        isStudio
      />
      <Buttons.BottomButtonBar
        label={SWITCH_COLUMNS}
        onPress={toggleGalleryOptions}
        style={style.buttonBarWrapper}
        labelStyle={style.buttonBarLabel}
      />
      <StudioInstructions editMode={editMode} sliderOptions={sliderOptions} />
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
