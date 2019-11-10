import React, {PureComponent} from "react";
import {View} from "react-native";
import {ImageWithColorStrip, LoadingView} from "shared/containers";
import {Buttons} from "shared/tools";
import style from "../styles";


class FocusedImage extends PureComponent{
    state = {
        palette: {
            id: 0,
            swatches: []
        }
    }

    componentDidMount() {
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
                    size={35}
                />
                {!this.props.editMode &&
                <Buttons.IconButton
                    style={style.focusedImageTrashButton}
                    name={"trash-can-outline"}
                    pressMethod={this.props.toggleEditMode}
                    size={35}
                />}
            </View>
        )
    }
}


export default FocusedImage;
