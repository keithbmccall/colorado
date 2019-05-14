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
import {CommonImageType} from "types-store";
import {ThunkDispatch} from "redux-thunk";

//slider options


// @ts-ignore
type ReduxState = rootReducer
type Props = {
    navigation: {
        navigate(arg1: string, arg2: object): any
    },
    images: Array<CommonImageType>,
    fetchCameraImages(): any,
    selectCameraRollImage(images: Array<CommonImageType>, image: CommonImageType): any,
    unselectCameraRollImages(images: Array<CommonImageType>): any
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
    selectedImages: Array<CommonImageType>
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
        this.props.unselectCameraRollImages(this.props.images);
        this.setState({
            selectedImages: []
        });
    }
    shouldConfirmMenuOpen = (): void =>
        this.setState({shouldConfirmMenuOpen: !!this.state.selectedImages.length});

    selectImage = (image: CommonImageType): void => {
        this.props.selectCameraRollImage(this.props.images, image);
        this.setState({
                selectedImages: checkSelectedImages(this.state.selectedImages, image),
            },
            this.shouldConfirmMenuOpen
        );
    };

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


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchCameraImages: () => dispatch(cameraRollActions.fetchCameraImages()),
    selectCameraRollImage: (images: Array<CommonImageType>, image: CommonImageType) => dispatch(cameraRollActions.selectCameraImage(images, image)),
    unselectCameraRollImages: (images: Array<CommonImageType>) => dispatch(cameraRollActions.unselectAllCameraImages(images))
});
const mapStateToProps = (state: ReduxState) => ({
    images: state.cameraRoll.cameraImages
});


export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)
