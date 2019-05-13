import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {ImageGallery, AnimatedView} from "shared/containers";
import {Buttons} from "shared/tools";
import {checkImages, checkSelectedImages, unSelectAllImages, renderSelectedImageCount} from "./methods";
import {saveStudioImages} from "helpers/device-storage";
import {cameraRollActions} from "store/actions";
import rootReducer from "store/reducers"
import style from './styles';
import {Dispatch} from "redux";
import {CommonImageType} from "types-store";

//slider options

type CameraRollImage = {
    node:any,
    tempId:number,
    uri: string
}
// @ts-ignore
type ReduxState = rootReducer
type Props = {
    navigation: {
        navigate(arg1: string, arg2: object): any
    },
    images: Array<CommonImageType>,
    fetchCameraImages(): any
}
type State = {
    shouldConfirmMenuOpen: boolean
    sliderOptions: {
        key: string,
        starting: number,
        ending: number
    },
    galleryOptions: {
        rowSize: number,
        rowHeight: number
    },
    selectedImages: Array<CommonImageType> | Array<any>
}

//slider options end
class CameraRollScreen extends PureComponent<Props, State> {
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
    };
    confirmSelectedImages = (): void => {
        saveStudioImages(this.state.selectedImages);
        this.props.navigation.navigate("Studio", {newSelectedImages: this.state.selectedImages});
        this.unSelectAllImages();
    }

    unSelectAllImages = (): void => {
        // @ts-ignore
        this.props.images = unSelectAllImages(this.props.images);
        this.setState({
            selectedImages: []
        });
    }
    shouldConfirmMenuOpen = (): void =>
        this.setState({shouldConfirmMenuOpen: !!this.state.selectedImages.length});

    selectImage = (image: CameraRollImage): void => {
        // @ts-ignore
        this.props.images = checkImages(this.props.images, image);
        // @ts-ignore
        this.setState({
                selectedImages: checkSelectedImages(this.state.selectedImages, image),
            },
            this.shouldConfirmMenuOpen
        );
    }

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


const mapDispatchToProps = (dispatch: Dispatch) => ({
    // @ts-ignore
    fetchCameraImages: () => dispatch(cameraRollActions.fetchCameraImages())
});
const mapStateToProps = (state: ReduxState) => ({
    images: state.cameraRoll.cameraImages
});


export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)
