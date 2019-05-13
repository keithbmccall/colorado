import React, {Component, Fragment} from "react";
import {View, TouchableOpacity} from "react-native";
import {LoadingView, ColorStripContainer} from "shared/containers";
import {ResponsiveImage} from "shared/tools";

type Props = {
    image: {
        uri: string
    },
    style?: object,
    pressMethod?: any
}
type State = {
    isImageReady: boolean,
    isColorsReady: boolean
}
export default class ImageWithColorStrip extends Component<Props, State> {
    state = {
        isImageReady: false,
        isColorsReady: false
    };

    imageReady = () => this.setState({isImageReady: true});

    colorsReady = () => this.setState({isColorsReady: true});

    isImageWithColorStripReady = () => this.state.isImageReady && this.state.isColorsReady;

    content = (props: Props) => (
        <Fragment>
            <ResponsiveImage src={props.image.uri} onReady={this.imageReady}/>
            <ColorStripContainer image={props.image} onReady={this.colorsReady} standAlone={false}/>
            {!this.isImageWithColorStripReady() &&
            <LoadingView/>}
        </Fragment>
    );

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

