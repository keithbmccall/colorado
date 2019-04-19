import React, {PureComponent} from "react";
import {CameraRoll, View, Text} from "react-native";
import {connect} from "react-redux";
import {ImageGallery, AnimatedView} from "shared/containers";
import {Buttons} from "shared/tools";
import {checkIsSelected, buildImageObject, unSelectAllImages} from "./methods";
import {saveStudioImages} from "helpers/device-storage";
import style from './styles';

class CameraRollScreen extends PureComponent {
    state = {
        images: [],
        galleryOptions: {
            rowSize: 4,
            rowHeight: 110
        },
        selectedImages: [],
        shouldConfirmMenuOpen: false,
        sliderOptions: {
            key: "bottom",
            starting: 0,
            ending: 50
        }
    };

    confirmSelectedImages = () => saveStudioImages(this.state.selectedImages) && this.unSelectAllImages();

    unSelectAllImages = () =>
        this.setState({
            images: unSelectAllImages(this.state.images),
            selectedImages: []
        });

    shouldConfirmMenuOpen = () =>
        this.setState({shouldConfirmMenuOpen: !!this.state.selectedImages.length});

    selectImage = image =>
        this.setState(
            {
                selectedImages: checkIsSelected("selectedImages", image, this.state),
                images: checkIsSelected("images", image, this.state)
            },
            this.shouldConfirmMenuOpen
        );

    setImages = images =>
        this.setState({
            images: images.edges.map(buildImageObject),
            pageInfo: images.page_info
        });

    getImages = async () => {
        const images = await CameraRoll.getPhotos({
            first: 20,
            assetType: "Photos"
        });
        this.setImages(images);
    };

    render() {
        const renderCount = this.state.selectedImages.length
            ? `(${this.state.selectedImages.length}) images selected.`
            : "";

        return (
            <View style={style.cameraRollScreenWrapper}>
                <Text style={style.titleText}>CameraRoll {renderCount}</Text>
                <ImageGallery
                    images={this.state.images}
                    galleryOptions={this.state.galleryOptions}
                    pressMethod={this.selectImage}
                />
                <AnimatedView
                    style={style.animatedViewSlider}
                    animation={this.state.sliderOptions}
                    shouldLaunch={this.state.shouldConfirmMenuOpen}
                >
                    <Buttons.FullWidthButton pressMethod={this.confirmSelectedImages}
                                             style={{height: 30, width: 30, backgroundColor: "red"}} textStyle={{}}
                                             innerText={"text for button"}/>
                </AnimatedView>
            </View>
        );
    }

    componentDidMount() {
        this.getImages();
    }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)
