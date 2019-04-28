import React, {PureComponent, Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {Layout, LoadingView} from 'shared/containers'
import StudioGallery from "./components/StudioGallery";
import FocusedImage from "./components/FocusedImage";
import {Buttons} from "shared/tools";
import {getStudioImages} from "helpers/device-storage";
import {studioActions} from "store/actions";
import style from "./styles";

class ImageStudioScreen extends Component {
    state = {
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

    setFocusedImage = () => console.log('setfocusediunmage');

    temporaryAddStudioImages = () =>
        this.props.navigation.state.params.newSelectedImages && this.props.temporaryAddStudioImages(this.props.navigation.state.params.newSelectedImages);

    render() {
        return (
            <Layout style={[style.imageStudioWrapper]}>
                <View style={[style.studioGalleryWrapper]}>
                    <Text>Studio Images</Text>
                    {this.props.images && this.props.images.length ? <StudioGallery
                        images={this.props.images}
                        galleryOptions={this.state.galleryOptions}
                        setFocusedImage={this.setFocusedImage}
                    /> : <LoadingView/>}
                </View>
            </Layout>
        );
    }

    componentDidMount() {
        this.props.navigation.state.params ? this.temporaryAddStudioImages() : this.props.fetchStudioImages()
        //    adds images from camera roll confirmation to bypass having to reload from storage
        //    creates a better UI as the transition is seamless when confirming new images to studio
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStudioImages: () => dispatch(studioActions.fetchStudioImages()),
    temporaryAddStudioImages: newImages => dispatch(studioActions.temporaryAddStudioImages(newImages))
});

const mapStateToProps = state => ({
    images: state.studio.studioImages ? state.studio.studioImages : []
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen)