import React, {PureComponent} from "react";
import {getAllSwatches} from "react-native-palette";
import ColorStrip from "./components/ColorStrip";
import {normalizeSwatches} from "./methods";
import LoadingView from "../loading/LoadingView";

type Props = {
    onReady(): any,
    image: {
        uri: string
    },
    style?: object,
    standAlone?: boolean,
    editMode?: boolean
}
type Swatch = {
    color: string
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
        standAlone: false,
        editMode: false
    };

    markAsReady = () => this.props.onReady && this.props.onReady();

    setSwatches = (image: ColorStripImage): void => {
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
    getDominantSwatches = (image: ColorStripImage): void =>
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

    inspectColorSwatch = (): void => {
        console.log('inspecting')
    }
    updateColorSwatch = (): void => {
        console.log('updating')
    }

    render() {
        if (this.state.isLoaded) {
            return this.props.editMode ? (
                <ColorStrip swatches={this.state.swatches} pressMethod={this.inspectColorSwatch}
                            longPressMethod={this.updateColorSwatch}/>
            ) : (
                <ColorStrip swatches={this.state.swatches}/>
            )
        } else {
            return <LoadingView blank={true}/>
        }
    }

    componentDidMount() {
        this.setSwatches(this.props.image);
    }


}



