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
import {CommonImageType} from "types-store";


type Images = Array<CommonImageType>
type State = {
    focusedImage:{
        image: Images | any
    },
    galleryOptions: {
        rowSize: number
        rowHeight: number
    },
    isGalleryExpanded: boolean
}
type Props = {
    images: Images,
    focusedImage:CommonImageType,
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
        focusedImage:{
            image: this.props.focusedImage
        },
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
                <View style={[style.focusedImageWrapper]}>
                    <FocusedImage focusedImage={this.props.focusedImage}/>
                </View>
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
    images: state.studio.studioImages ? state.studio.studioImages : [],
    focusedImage:state.studio.studioImages ? state.studio.studioImages[0] : []
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen)