import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {View, TouchableOpacity} from "react-native";
import {LoadingView, ColorStripContainer} from "shared/containers";
import {ResponsiveImage} from "shared/tools";

export default class ImageWithColorStrip extends Component {
    state = {
        isImageReady: false,
        isColorsReady: false
    };

    imageReady = () => this.setState({isImageReady: true});

    colorsReady = () => this.setState({isColorsReady: true});

    isImageWithColorStripReady = () => this.state.isImageReady === true && this.state.isColorsReady === true;

    content = props => (
        <Fragment>
            <ResponsiveImage src={props.image.uri} onReady={this.imageReady}/>
            <ColorStripContainer image={props.image} onReady={this.colorsReady} standAlone={false}/>
            {!this.isImageWithColorStripReady() &&
            <LoadingView style={{position: 'absolute', width: "100%", height: "100%", backgroundColor: 'red'}}/>}
        </Fragment>
    );

    renderContent = props =>
        props.pressMethod ? (
            <TouchableOpacity underlayColor="transparent" style={props.style} onPress={props.pressMethod}>
                {this.content(props)}
            </TouchableOpacity>
        ) : (
            <View style={props.style}>
                {this.content(props)}
            </View>
        );

    componentDidUpdate(prevProps, prevState) {
        if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
            this.props.shouldLaunch ? this.openMenu() : this.closeMenu();
        }
    }

    render() {
        return <Fragment>{this.renderContent(this.props)}</Fragment>;
    }
}

//  PROPTYPES
ImageWithColorStrip.defaultProps = {
    // button: false
};
ImageWithColorStrip.propTypes = {
    image: PropTypes.shape({
        uri: PropTypes.string.isRequired
    }),
    style: PropTypes.any,
    pressMethod: PropTypes.func
};
