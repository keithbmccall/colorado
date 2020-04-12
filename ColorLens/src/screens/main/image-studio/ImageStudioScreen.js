import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import FocusedImage from "./components/FocusedImage";
import { Buttons, Layout, LoadingView } from "#containers";
import { studioActions } from "#store/actions";
import style from "./styles";
import StudioInstructions from "./components/StudioInstructions";
import ImageGallery from "#containers/image-gallery/ImageGallery";

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
      key: "bottom"
    }
  };
  toggleGalleryOptions = () => {
    //    rowSize:3,
    //    rowHeight:140
    //    or
    //    rowSize:2,
    //    rowHeight:220
    const toggleRowSize = rowSize => {
      if (rowSize === 2) {
        // toggle rowsize from 2 per row (default) to 3 per row
        return { rowSize: 3, rowHeight: 140 };
      }
      return { rowSize: 2, rowHeight: 220 };
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
  setFocusedImage = image => {
    this.props.setFocusedImage(image);
  };

  render() {
    return (
      <Layout style={style.imageStudioWrapper}>
        <View style={style.imageStudioHeadingWrapper}>
          <Text style={style.imageStudioHeading}>Studio</Text>
        </View>
        {this.props.focusedImage ? (
          <FocusedImage
            focusedImage={this.props.focusedImage}
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
          />
        ) : (
          <LoadingView style={style.focusedImageWrapper} />
        )}

        <ImageGallery
          images={this.props.images}
          galleryOptions={this.state.galleryOptions}
          setFocusedImage={this.setFocusedImage}
          isStudio
        />
        <Buttons.BottomButtonBar
          options={this.buttonBarOptions()}
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
  setFocusedImage: image => dispatch(studioActions.setFocusedImage(image))
});

const mapStateToProps = state => ({
  images: state.studio.studioImages.length ? state.studio.studioImages : [],
  focusedImage: state.studio.focusedImage ? state.studio.focusedImage : null
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen);
