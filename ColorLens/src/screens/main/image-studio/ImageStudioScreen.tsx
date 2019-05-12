import React, {PureComponent, Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import StudioGallery from "./components/StudioGallery";
import FocusedImage from "./components/FocusedImage";
import {Layout, LoadingView} from 'shared/containers'
import {Buttons} from "shared/tools";
import {getStudioImages} from "helpers/device-storage";
import {studioActions} from "store/actions";
import rootReducer from "store/reducers"
import style from "./styles";

type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string
}
type Images = Array<Image>
type State = {}
type Props = {
    images: Images,
    navigation: {
        state: {
            params: {
                newSelectedImages: Array<object>
            }
        }
    },
    temporaryAddStudioImages: any,
    fetchStudioImages: any
}
// @ts-ignore
type ReduxState = rootReducer

class ImageStudioScreen extends Component<Props, State> {
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
                    {this.props.images && this.props.images.length ?
                        <StudioGallery
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


const mapDispatchToProps = (dispatch: Dispatch) => ({
    // @ts-ignore
    fetchStudioImages: () => dispatch(studioActions.fetchStudioImages()),
    // @ts-ignore
    temporaryAddStudioImages: (newImages: Images) => dispatch(studioActions.temporaryAddStudioImages(newImages))
});

const mapStateToProps = (state: ReduxState) => ({
    images: state.studio.studioImages ? state.studio.studioImages : []
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen)