import React, {PureComponent} from "react";
import {View} from "react-native";
import {ImageWithColorStrip, LoadingView} from "shared/containers";
import {CommonImageType, SwatchPalette} from "types-store";
import {Buttons} from "shared/tools";
import style from "../styles";

//
type Props = {
    focusedImage: CommonImageType,
    editMode: boolean,
    toggleEditMode: any
}
type State = {
    palette: SwatchPalette
}

class FocusedImage extends PureComponent<Props, State> {
    state = {
        palette: {
            id: 0,
            swatches: []
        }
    }

    componentDidMount(): void {
        this.setState({
            palette: this.props.focusedImage.palette
        })
    }

    render() {
        console.log('focu', this.props.focusedImage)
        return (
            <View style={style.focusedImageWrapper}>
                <ImageWithColorStrip
                    image={this.props.focusedImage}
                    style={style.focusedImageWrapper}
                    editMode={this.props.editMode}
                />
                <Buttons.IconButton
                    style={style.focusedImageEditButton}
                    name={this.props.editMode ? "pencil-box" : "pencil-box-outline"}
                    pressMethod={this.props.toggleEditMode}
                    size={30}
                />
            </View>
        )
    }
}


export default FocusedImage;
