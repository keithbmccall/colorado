import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import {ImageGallery, AnimatedView} from "shared/containers";
import {Buttons} from "shared/tools";
import {renderSelectedImageCount, selectOrUnselectImage} from "./methods";
import {cameraRollActions} from "store/actions";
import rootReducer from "store/reducers"
import style from './styles';
import {AnimatedViewType, CommonImageType} from "types-store";
import {ThunkDispatch} from "redux-thunk";

// @ts-ignore
type ReduxState = rootReducer
type Props = {
    navigation: {
        navigate(arg1: string, arg2: object): any
    },
    images: Array<CommonImageType>,
    fetchCameraImages(): any,
    saveImagesToStudio(images: Array<CommonImageType>): any,
    unselectCameraRollImages(images: Array<CommonImageType>): any
}
type State = {
    shouldConfirmMenuOpen: boolean
    sliderOptions: AnimatedViewType,
    galleryOptions: {
        rowSize: number,
        rowHeight: number
    },
    images: Array<CommonImageType>,
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
        images: []
    };
    fetchCameraRollImages = async (): Promise<void> => {
        await this.props.fetchCameraImages();
        this.setState({
            images: this.props.images
        })
    }

    confirmSelectedImages = (): void => {
        this.props.saveImagesToStudio(this.state.selectedImages);
        // this.props.navigation.navigate("Studio", {newSelectedImages: this.state.selectedImages});
        this.unSelectAllImages();
    }

    unSelectAllImages = (): void => {
        this.setState({
            selectedImages: []
        });
    };

    shouldConfirmMenuOpen = (): void => {
        this.setState({
            shouldConfirmMenuOpen: !!this.state.selectedImages.length
        });
    };
    selectImage = (image: CommonImageType): void => {
        const {images, selectedImages} = selectOrUnselectImage(
            this.state.images,
            this.state.selectedImages,
            image
        )
        this.setState({
                images,
                selectedImages
            },
            this.shouldConfirmMenuOpen
        );
    };

    render() {
        return (
            <View style={style.cameraRollScreenWrapper}>
                <Text style={style.titleText}>CameraRoll</Text>
                <ImageGallery
                    images={this.state.images}
                    galleryOptions={this.state.galleryOptions}
                    pressMethod={this.selectImage}
                />
                <AnimatedView
                    style={style.animatedViewSlider}
                    animation={this.state.sliderOptions}
                    shouldLaunch={this.state.shouldConfirmMenuOpen}
                    speed={12}
                >
                    <Buttons.FullWidthButton
                        pressMethod={this.confirmSelectedImages}
                        innerText={`Import ${renderSelectedImageCount(this.state.images)} To The Studio`}
                        style={{}}
                        textStyle={{...style.animatedViewText}}
                    />
                </AnimatedView>
            </View>
        );
    }

    componentDidMount() {
        this.fetchCameraRollImages()
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchCameraImages: () => dispatch(cameraRollActions.fetchCameraImages()),
    saveImagesToStudio: (images: Array<CommonImageType>) => dispatch(cameraRollActions.saveImagesToStudio(images))
});
const mapStateToProps = (state: ReduxState) => ({
    images: state.cameraRoll.cameraImages
});


export default connect(mapStateToProps, mapDispatchToProps)(CameraRollScreen)
