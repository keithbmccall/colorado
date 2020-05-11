import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { renderSelectedImageCount, selectOrUnselectImage } from "./utils";
import { ImageGallery, AnimatedView, Buttons } from "#containers";
import { cameraRollActions, studioActions } from "#store/actions";
import style from "./styles";
import { defaultCameraRollOptionsEnum } from "#enum";

//slider options end
class CameraRollScreen extends PureComponent {
  state = {
    isConfirmMenuOpen: false,
    galleryOptions: {
      rowSize: 4,
      rowHeight: 110
    },
    sliderOptions: {
      key: "bottom",
      starting: -100,
      ending: 0
    }
  };

  cameraRollOptions = () => {
    return defaultCameraRollOptionsEnum;
  };

  fetchCameraRollImages = async () => await this.props.fetchCameraImages(this.cameraRollOptions());

  confirmSelectedImages = async () => {
    const { selectedImages, saveImagesToStudio, unselectAllImages, navigation } = this.props;
    await saveImagesToStudio(selectedImages);
    navigation.navigate("Main", {
      screen: "Studio",
      params: {
        screen: "Modal",
        selectedImages
      }
    });
    unselectAllImages();
  };

  shouldConfirmMenuOpen = () => {
    this.setState({
      shouldConfirmMenuOpen: !!this.props.selectedImages.length
    });
  };

  selectImage = async image => {
    const { images, selectedImages } = selectOrUnselectImage({
      images: this.props.images,
      selectedImages: this.props.selectedImages,
      image
    });

    await this.props.saveImageState({ images, selectedImages });
    this.shouldConfirmMenuOpen();
  };

  renderButtonText = () => {
    return `Import ${renderSelectedImageCount(this.props.images)} To The Studio`;
  };

  render() {
    return (
      <View style={style.cameraRollScreenWrapper}>
        <Text style={style.titleText}>CameraRoll</Text>
        <ImageGallery
          images={this.props.images}
          galleryOptions={this.state.galleryOptions}
          pressMethod={this.selectImage}
        />
        <AnimatedView
          style={style.animatedViewSlider}
          animation={this.state.sliderOptions}
          shouldLaunch={this.state.shouldConfirmMenuOpen}
          speed={12}
        >
          <Buttons.FullWidthButton
            pressMethod={this.confirmSelectedImages}
            innerText={this.renderButtonText()}
            style={{}}
            textStyle={{ ...style.animatedViewText }}
          />
        </AnimatedView>
      </View>
    );
  }

  componentDidMount() {
    this.fetchCameraRollImages();
  }
}

const mapDispatchToProps = dispatch => {
  const { fetchCameraImages, saveImageState, unselectAllImages } = cameraRollActions;
  return {
    fetchCameraImages: () => dispatch(fetchCameraImages()),
    saveImageState: ({ images, selectedImages }) =>
      dispatch(saveImageState({ images, selectedImages })),
    unselectAllImages: () => dispatch(unselectAllImages()),
    saveImagesToStudio: images => dispatch(studioActions.saveImagesToStudio(images))
  };
};

const mapStateToProps = state => ({
  images: state.cameraRoll.cameraImages,
  selectedImages: state.cameraRoll.selectedImages
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen);
