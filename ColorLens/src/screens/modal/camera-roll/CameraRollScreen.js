import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {ImageGallery, AnimatedView} from "shared/containers";
import {Buttons} from "shared/tools";
import {checkImages, checkSelectedImages, unSelectAllImages, renderSelectedImageCount} from "./methods";
import {saveStudioImages} from "helpers/device-storage";
import {cameraRollActions} from "store/actions";
import style from './styles';

//slider options
const sliderOptions = {
    key: "bottom",
    starting: -100,
    ending: 0
};

//slider options end
class CameraRollScreen extends PureComponent {
    state = {
        galleryOptions: {
            rowSize: 4,
            rowHeight: 110
        },

        shouldConfirmMenuOpen: false,
        sliderOptions: sliderOptions,
        selectedImages: [],
    };

    confirmSelectedImages = () => {
        saveStudioImages(this.state.selectedImages) && this.unSelectAllImages();
        this.props.navigation.navigate("Studio");
    }
    unSelectAllImages = () =>
        this.props.images = unSelectAllImages(this.props.images) &&
            this.setState({
                selectedImages: []
            });

    shouldConfirmMenuOpen = () =>
        this.setState({shouldConfirmMenuOpen: !!this.state.selectedImages.length});

    selectImage = image =>
        this.props.images = checkImages(this.props.images, image) &&
            this.setState(
                {
                    selectedImages: checkSelectedImages(this.state.selectedImages, image),
                },
                this.shouldConfirmMenuOpen
            );


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
                    duration={500}
                >
                    <Buttons.FullWidthButton pressMethod={this.confirmSelectedImages}
                                             innerText={`Import ${renderSelectedImageCount(this.state.selectedImages)} To The Studio`}
                                             style={{}}
                                             textStyle={{...style.animatedViewText}}
                    />
                </AnimatedView>
            </View>
        );
    }

    componentDidMount() {
        this.props.fetchCameraImages();
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCameraImages: () => dispatch(cameraRollActions.fetchCameraImages())
});
const mapStateToProps = state => ({
    images: state.cameraRoll.cameraImages
})


export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)
