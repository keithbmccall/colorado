import React, {PureComponent} from "react";
import {CameraRoll, View, Text, Dimensions} from "react-native";
import StudioGallery from "./components/StudioGallery";
import FocusedImage from "./components/FocusedImage";
import {Buttons} from "shared/tools";
import style from "./styles";
import {getStudioImages} from "helpers/device-storage";

export default class ImageStudioScreen extends PureComponent {
    state = {
        photos: [],
        focusedPhoto: {
            valid: false,
            photo: {uri: ""},
            type: ""
        },
        pageInfo: {},
        galleryOptions: {
            rowSize: 2,
            rowHeight: 220
        },
        isGalleryExpanded: false
    };

    buildPhotoObject = photo => {
        photo.id = photo.node.timestamp;
        photo.uri = photo.node.image.uri;
        return photo;
    };
    setPhotos = photos =>
        this.setState(
            {
                photos: photos.edges.map(this.buildPhotoObject),
                pageInfo: photos.page_info
            },
            this.setFocusedImage(this.buildPhotoObject(photos.edges[0]))
        );

    setFocusedImage = image => {
        this.setState({
            focusedPhoto: {
                valid: true,
                photo: {
                    id: image.id,
                    uri: image.uri
                }
            }
        });
    };
    setSwatches = () => {
        this.setState({});
    };
    toggleGalleryState = () =>
        this.setState({
            isGalleryExpanded: !this.state.isGalleryExpanded
        });
    toggleExpandGallery = () => {
        this.state.isGalleryExpanded ? this._panel.hide() : this._panel.show();
        this.toggleGalleryState();
    };
    getStudioImages = async () => {
        const images = await getStudioImages();
        console.log("images stuido:", images);
    };

    render() {
        return (
            <View style={[style.imageStudioWrapper]}>
                {/* <FocusedImage focusedPhoto={this.state.focusedPhoto} /> */}
                <Buttons.FullWidthButton pressMethod={this.toggleExpandGallery}/>
                <View style={[style.studioGalleryWrapper]}>
                    <Text>studoi images here</Text>
                    {/* <StudioGallery
            photos={this.state.photos}
            galleryOptions={this.state.galleryOptions}
            setFocusedImage={this.setFocusedImage}
          /> */}
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.getPhotos();
    }
}
