import React, {PureComponent, Fragment} from "react";
import {View, TouchableOpacity} from "react-native";
import {LoadingView, ColorStripContainer} from "shared/containers/index";
import {ResponsiveImage} from "shared/tools";
import {CommonImageType} from "types-store";

type Props = {
    image: CommonImageType,
    style?: object,
    pressMethod?: any,
    editMode?: boolean
}
type State = {
    isImageReady: boolean,
    isColorsReady: boolean
}
export default class ImageWithColorStrip extends PureComponent<Props, State> {
    state = {
        isImageReady: false,
        isColorsReady: false
    };
    static defaultProps = {
        editMode: false
    };

    imageReady = () => this.setState({isImageReady: true});

    colorsReady = () => this.setState({isColorsReady: true});


    content = (props: Props) => {
        return (
            <Fragment>
                <ResponsiveImage src={props.image.uri} onReady={this.imageReady}/>
                {props.image.uri &&
                <ColorStripContainer image={props.image} onReady={this.colorsReady} standAlone={false}
                                     editMode={this.props.editMode}/>}
                {(!this.state.isColorsReady || !this.state.isColorsReady) && <LoadingView blank={false}/>}
            </Fragment>
        );
    };

    renderContent = (props: Props) =>
        props.pressMethod ? (
            <TouchableOpacity style={props.style} onPress={props.pressMethod} activeOpacity={.8}>
                {this.content(props)}
            </TouchableOpacity>
        ) : (
            <View style={props.style}>
                {this.content(props)}
            </View>
        );

    render() {
        return <Fragment>{this.renderContent(this.props)}</Fragment>;
    }

}

//  PROPTYPES

