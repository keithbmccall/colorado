import React, {PureComponent} from "react";
import {CameraRoll, View, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {ImageGallery, AnimatedView} from "shared/containers";
import {Buttons} from "shared/tools";
import {checkIsSelected, buildImageObject, unSelectAllImages} from "./methods";
import {saveStudioImages} from "helpers/device-storage";

class CameraRollScreen extends PureComponent {
    state = {
        images: [],
        galleryOptions: {
            rowSize: 4,
            rowHeight: 110
        },
        selectedImages: [],
        //
        confirmMenuOpen: false
    };

    confirmSelectedImages = () => saveStudioImages(this.state.selectedImages) && this.unSelectAllImages();

    unSelectAllImages = () =>
        this.setState({
            images: unSelectAllImages(this.state.images),
            selectedImages: []
        });

    shouldConfirmMenuOpen = () => {
        console.log(this.state.selectedImages.length);
        this.setState({confirmMenuOpen: this.state.selectedImages.length});
    };
    selectImage = image =>
        this.setState(
            {
                selectedImages: checkIsSelected("selectedImages", image, this.state),
                images: checkIsSelected("images", image, this.state)
            },
            this.shouldConfirmMenuOpen()
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
            <View style={{flex: 1}}>
                <Text>CameraRoll {renderCount}</Text>
                <ImageGallery
                    images={this.state.images}
                    galleryOptions={this.state.galleryOptions}
                    pressMethod={this.selectImage}
                />
                <AnimatedView
                    style={{position: "absolute"}}
                    animation={{key: "bottom", starting: 0, ending: 50}}
                    shouldLaunch={this.state.confirmMenuOpen}
                >
                    <TouchableOpacity onPress={this.confirmSelectedImages}>
                        <View style={{height: 30, width: 30, backgroundColor: "red"}}/>
                    </TouchableOpacity>
                </AnimatedView>
            </View>
        );
    }

    componentDidMount() {
        this.getImages();
    }
}

const mapDispatchToProps = dispatch => {

};
const mapStateToProps = state => {

};

export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)