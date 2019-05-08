import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getAllSwatches} from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import {LoadingView} from "shared/containers";
import {normalizeSwatches} from "./methods";

export default class ColorStripContainer extends PureComponent {
    state = {
        isLoaded: false,
        swatches: []
    };

    markAsReady = () => this.props.onReady && this.props.onReady();

    setSwatches = image => {
        //    checks to see if image has palettes already, if not then it runs code to find the dominant colors
        if (image.palette) {
            this.setState({
                isLoaded: true,
                swatches: image.palette.swatches
            }, this.markAsReady())
        } else {
            this.getDominantSwatches(image);
        }
    };
    getDominantSwatches = image =>
        getAllSwatches({quality: "medium"}, image.uri, (error, swatches) =>
            error
                ? console.log("error in ColorStripcontainer.getDominantSwatches", error)
                : this.setState(
                {
                    isLoaded: true,
                    swatches: normalizeSwatches(swatches)
                },
                this.markAsReady()
                )
        );


    render() {
        // this.state.colors.isLoaded && console.log("image", this.props.image.id, this.state.colors);
        return this.state.isLoaded ? (
            <ColorStrip
                // style={this.props.style}
                // pressMethod={}
                // longPressMethod={}
                swatches={this.state.swatches}
            />
        ) : (
            <LoadingView/>
        );
    }

    componentDidMount() {
        this.setSwatches(this.props.image);
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

