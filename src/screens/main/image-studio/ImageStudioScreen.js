import React, { useState, memo, useCallback } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ImageStudio from "./components/ImageStudio";
import Text from "#containers/text";
import Layout from "#containers/layouts/Layout";
import { studioActions } from "#store/actions";
import style from "./styles";
import ImageGallery from "#containers/image-gallery/ImageGallery";
import { ROW_DIMENSIONS } from "#enum/row-dimensions";
import { studioSelectors } from "#selectors";
import PropTypes from "prop-types";
import { CAMERA_ROLL, CHOOSER, INSPECT, navigateTo } from "#navigation/navigators";
import { fromImageStudioScreen } from "#navigation/from";
import EmptyImageStudio from "./components/EmptyImageStudio";

const initialState = {
  galleryOptions: ROW_DIMENSIONS.rowSize3,
  sliderOptions: {
    starting: style.directionsWrapperPosition.bottom,
    ending: style.directionsWrapperPosition.top,
    key: "translateY"
  }
};

const ImageStudioScreen = props => {
  const { studioImage, studioImages, setImageStudioImage, navigation } = props;

  const [galleryOptions] = useState(initialState.galleryOptions);

  const inspectColorSwatch = (swatch, swatchIndex) =>
    navigateTo(navigation, INSPECT, fromImageStudioScreen({ swatch, swatchIndex }));

  const launchChooserScreen = () =>
    navigateTo(navigation, CHOOSER, fromImageStudioScreen({ studioImage }));

  const _setImageStudioImage = useCallback(image => setImageStudioImage(image), [
    setImageStudioImage
  ]);

  const launchCameraRoll = () => navigateTo(navigation, CAMERA_ROLL, fromImageStudioScreen({}));

  return (
    <Layout style={style.imageStudioWrapper}>
      <View style={style.imageStudioHeadingWrapper}>
        <Text.Title style={style.imageStudioHeading}>Studio</Text.Title>
      </View>
      <View style={style.imageStudioWrapper}>
        {studioImage ? (
          <ImageStudio
            image={studioImage}
            onPress={inspectColorSwatch}
            onEditPress={launchChooserScreen}
          />
        ) : (
          <EmptyImageStudio launchCameraRoll={launchCameraRoll} />
        )}
      </View>

      <ImageGallery
        images={studioImages}
        galleryOptions={galleryOptions}
        onPress={_setImageStudioImage}
        style={style.imageStudioGalleryWrapper}
        isStudio
      />
    </Layout>
  );
};

ImageStudioScreen.propTypes = {
  // redux
  studioImages: PropTypes.array.isRequired,
  studioImage: PropTypes.object,
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
