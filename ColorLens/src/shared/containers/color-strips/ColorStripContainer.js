import React, {Component} from "react";
import PropTypes from "prop-types";
import {getAllSwatches} from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import {LoadingView} from "shared/containers";
import {normalizeSwatches} from "./methods";

const reactNativePaletteOptions = {
    quality: "medium"
}
export default class ColorStripContainer extends Component {
    state = {
        options: reactNativePaletteOptions,
        colors: {
            isLoaded: false,
            swatches: []
        }
    };

    getDominantSwatches = src =>
        getAllSwatches(this.state.options, src, (error, swatches) =>
            error
                ? console.log("error in PhotosPage.getSwatches", error)
                : this.setState(
                {
                    colors: {
                        isLoaded: true,
                        swatches: normalizeSwatches(swatches)
                    }
                },
                this.props.onReady && this.props.onReady()
                )
        );

    setSwatches = image =>
        image.swatches ?
            console.log('swatching the image: ', image) :
            this.getDominantSwatches(image.uri);


    render() {
        return this.state.colors.isLoaded ? (
            <ColorStrip
                // style={this.props.style}
                // pressMethod={}
                // longPressMethod={}
                swatches={this.state.colors.swatches}
            />
        ) : (
            <LoadingView/>
        );
    }

    componentDidMount() {
        this.setSwatches(this.props.image)
    }
}

ColorStripContainer.defaultProps = {
    style: {
        height: 50,
        width: "100%"
    },
    standAlone: false
};
ColorStripContainer.propTypes = {
    image: PropTypes.shape({
        uri: PropTypes.string.isRequired,
    }),
    style: PropTypes.object,
    onReady: PropTypes.func,
    standAlone: PropTypes.bool
};
