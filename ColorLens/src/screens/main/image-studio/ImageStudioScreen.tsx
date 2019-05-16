import React, {PureComponent, Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import StudioGallery from "./components/StudioGallery";
import FocusedImage from "./components/FocusedImage";
import {BottomButtonBar, Layout, LoadingView, ButtonBarOptionType, AnimatedView} from 'shared/containers'
import {AnimatedViewType, CommonImageType} from "types-store";
import {studioActions} from "store/actions";
import rootReducer from "store/reducers"
import style from "./styles";
import {ThunkDispatch} from "redux-thunk";


type Images = Array<CommonImageType>
type State = {
    focusedImage: {
        image: Images | any
    },
    galleryOptions: {
        rowSize: number
        rowHeight: number
    },
    editMode: boolean,
    sliderOptions: AnimatedViewType
}
type Props = {
    images: Images,
    focusedImage: CommonImageType,
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
        focusedImage: {
            image: this.props.focusedImage
        },
        galleryOptions: {
            rowSize: 2,
            rowHeight: 220
        },
        editMode: false,
        sliderOptions: {
            starting: -style.directionsWrapper.height,
            ending: 30,
            key: "bottom"
        }
    };
    toggleGalleryOptions = () => {
        //    rowSize:3,
        //    rowHeight:140
        //    or
        //    rowSize:2,
        //    rowHeight:220
        const toggleRowSize = (rowSize: number) => {
            if (rowSize === 2) {
                // toggle rowsize from 2 per row (default) to 3 per row
                return {rowSize: 3, rowHeight: 140};
            }
            return {rowSize: 2, rowHeight: 220};

        };
        this.setState({
            galleryOptions: toggleRowSize(this.state.galleryOptions.rowSize)
        })
    }
    buttonBarOptions = (): Array<ButtonBarOptionType> => [
        {
            label: "Switch Columns",
            pressMethod: this.toggleGalleryOptions
        }
    ];

    setFocusedImage = () => console.log('setfocusediunmage');

    temporaryAddStudioImages = () =>
        this.props.navigation.state.params.newSelectedImages && this.props.temporaryAddStudioImages(this.props.navigation.state.params.newSelectedImages);


    toggleEditMode = (): void => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    render() {

        return (
            <Layout style={style.imageStudioWrapper}>
                <View style={style.imageStudioHeadingWrapper}>
                    <Text style={style.imageStudioHeading}>Studio</Text>
                </View>
                <FocusedImage focusedImage={this.props.focusedImage} editMode={this.state.editMode}
                              toggleEditMode={this.toggleEditMode}/>
                <StudioGallery images={this.props.images} galleryOptions={this.state.galleryOptions}
                               setFocusedImage={this.setFocusedImage}/>
                <BottomButtonBar options={this.buttonBarOptions()} style={style.buttonBarWrapper}
                                 labelStyle={style.buttonBarLabel}/>
                <AnimatedView shouldLaunch={this.state.editMode} animation={this.state.sliderOptions}
                              style={style.directionsWrapper}>
                    <View style={style.directionsCard}>
                        <Text style={style.directionsLabel}><Text style={style.directionsSpan}>TAP</Text> on a swatch to
                            read swatch strip or</Text>
                        <Text style={style.directionsLabel}><Text style={style.directionsSpan}>PRESS</Text> on a swatch
                            to edit your Palette!</Text>
                    </View>
                </AnimatedView>
            </Layout>
        );
    }

    componentDidMount() {
        this.props.navigation.state.params ? this.temporaryAddStudioImages() : this.props.fetchStudioImages()
        //    adds images from camera roll confirmation to bypass having to reload from storage
        //    creates a better UI as the transition is seamless when confirming new images to studio
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchStudioImages: () => dispatch(studioActions.fetchStudioImages()),
    temporaryAddStudioImages: (newImages: Images) => dispatch(studioActions.temporaryAddStudioImages(newImages))
});

const mapStateToProps = (state: ReduxState) => ({
    images: state.studio.studioImages ? state.studio.studioImages : [],
    focusedImage: state.studio.studioImages ? state.studio.studioImages[0] : []
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStudioScreen)