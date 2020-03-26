import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { ImageGallery, AnimatedView } from "shared/containers";
import { Buttons } from "shared/tools";
import { renderSelectedImageCount, selectOrUnselectImage } from "./methods";
import { cameraRollActions, studioActions } from "store/actions";
import style from "./styles";

//slider options end
class CameraRollScreen extends PureComponent {
  state = {
    galleryOptions: {
      rowSize: 4,
      rowHeight: 110
    },
    shouldConfirmMenuOpen: false,
    sliderOptions: {
      key: "bottom",
      starting: -100,
      ending: 0
    },
    selectedImages: [],
    images: []
  };
  fetchCameraRollImages = async () => {
    await this.props.fetchCameraImages();
    this.setState({
      images: this.props.images
    });
  };

  confirmSelectedImages = () => {
    this.props.saveImagesToStudio(this.state.selectedImages);
    this.props.navigation.navigate("Main", {
      screen: "Studio",
      params: {
        screen: "Modal",
        newSelectedImages: this.state.selectedImages
      }
    });
    this.unSelectAllImages();
  };

  unSelectAllImages = () => {
    this.setState({
      selectedImages: []
    });
  };

  shouldConfirmMenuOpen = () => {
    this.setState({
      shouldConfirmMenuOpen: !!this.state.selectedImages.length
    });
  };
  selectImage = image => {
    const { images, selectedImages } = selectOrUnselectImage(
      this.state.images,
      this.state.selectedImages,
      image
    );
    this.setState(
      {
        images,
        selectedImages
      },
      this.shouldConfirmMenuOpen
    );
  };

  render() {
    return (
      <View style={style.cameraRollScreenWrapper}>
        <Text style={style.titleText}>CameraRoll</Text>
        <ImageGallery
          images={this.state.images}
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
            innerText={`Import ${renderSelectedImageCount(this.state.images)} To The Studio`}
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

const mapDispatchToProps = dispatch => ({
  fetchCameraImages: () => dispatch(cameraRollActions.fetchCameraImages()),
  saveImagesToStudio: images => dispatch(studioActions.saveImagesToStudio(images))
});
const mapStateToProps = state => ({
  images: state.cameraRoll.cameraImages
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen);
