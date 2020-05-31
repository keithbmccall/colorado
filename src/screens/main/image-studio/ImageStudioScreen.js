import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import ImageStudio from "./components/ImageStudio";
import { Buttons, Layout } from "#containers";
import { studioActions } from "#store/actions";
import style from "./styles";
import StudioInstructions from "./components/StudioInstructions";
import { ImageGallery } from "#containers";
import { ROW_DIMENSIONS } from "#constants";
import { studioSelectors } from "#selectors";

class ImageStudioScreen extends PureComponent {
  state = {
    galleryOptions: {
      rowSize: 2,
      rowHeight: 220
    },
    editMode: false,
    sliderOptions: {
      starting: -style.directionsWrapper.height,
      ending: 30,
      key: "translateY"
    }
  };

  toggleGalleryOptions = () => {
    const toggleRowSize = rowSize => {
      if (rowSize === 2) {
        return ROW_DIMENSIONS.rowSize3;
      }
      return ROW_DIMENSIONS.rowSize2;
    };

    this.setState({
      galleryOptions: toggleRowSize(this.state.galleryOptions.rowSize)
    });
  };
  buttonBarOptions = () => [
    {
      label: "Switch Columns",
      pressMethod: this.toggleGalleryOptions
    }
  ];

  temporaryAddStudioImages = () =>
    this.props.navigation.state.params.selectedImages &&
    this.props.temporaryAddStudioImages(this.props.navigation.state.params.selectedImages);

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  setImageStudioImage = image => {
    this.props.setImageStudioImage(image);
  };

  inspectColorSwatch = (color, colorIndex) => {
    console.log("inspecting", color, colorIndex);
  };

  updateColorSwatch = (color, colorIndex) => {
    console.log("updating", color, colorIndex);
  };

  render() {
    return (
      <Layout style={style.imageStudioWrapper}>
        <View style={style.imageStudioHeadingWrapper}>
          <Text style={style.imageStudioHeading}>Studio</Text>
        </View>
        <ImageStudio
          image={this.props.imageStudioImage}
          editMode={this.state.editMode}
          toggleEditMode={this.toggleEditMode}
          onPress={this.inspectColorSwatch}
          onLongPress={this.updateColorSwatch}
        />
        <ImageGallery
          images={this.props.images}
          galleryOptions={this.state.galleryOptions}
          onPress={this.setImageStudioImage}
          isStudio
        />
        <Buttons.BottomButtonBar
          options={this.buttonBarOptions()}
          label={this.buttonBarOptions().label}
          onPress={this.buttonBarOptions().pressMethod}
          style={style.buttonBarWrapper}
          labelStyle={style.buttonBarLabel}
        />
        <StudioInstructions
          editMode={this.state.editMode}
          sliderOptions={this.state.sliderOptions}
        />
      </Layout>
    );
  }

  componentDidMount() {
    // this.props.navigation.state.params ? this.temporaryAddStudioImages() : this.props.fetchStudioImages()
    //    adds images from camera roll confirmation to bypass having to reload from storage
    //    creates a better UI as the transition is seamless when confirming new images to studio
  }
}

const mapDispatchToProps = dispatch => ({
  // fetchStudioImages: () => dispatch(studioActions.fetchStudioImages()),
  // temporaryAddStudioImages: (newImages: Images) => dispatch(studioActions.temporaryAddStudioImages(newImages)),
  setImageStudioImage: image => dispatch(studioActions.setImageStudioImage(image))
});

const mapStateToProps = state => {
  const { imageStudioImageSelector, studioImagesSelector } = studioSelectors;
  return {
    images: studioImagesSelector(state),
    imageStudioImage: imageStudioImageSelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen);
