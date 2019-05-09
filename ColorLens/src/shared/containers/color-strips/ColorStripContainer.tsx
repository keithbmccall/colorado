import React, {PureComponent} from "react";
import {getAllSwatches} from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import {LoadingView} from "shared/containers";
import {normalizeSwatches} from "./methods";

type Props = {
    onReady(): any,
    image: {
        uri: string
    },
    style?: object,
    standAlone?: boolean
}
type Swatch = {
    color:string
}
type State = {
    isLoaded: boolean,
    swatches: Array<Swatch> | Array<any>
}
type ColorStripImage = {
    uri: string,
    palette?: {
        swatches: Array<object>
    }
}

export default class ColorStripContainer extends PureComponent<Props, State> {
    state = {
        isLoaded: false,
        swatches: []
    };
    static defaultProps = {
        style: {
            height: 50,
            width: "100%"
        },
        standAlone: false
    };

    markAsReady = () => this.props.onReady && this.props.onReady();

    setSwatches = (image: ColorStripImage) => {
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
    getDominantSwatches = (image: ColorStripImage) =>
        getAllSwatches({quality: "medium"}, image.uri, (error: any, swatches: []) =>
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



