import React from "react";
import {View} from "react-native";
import {ImageWithColorStrip, LoadingView} from "shared/containers";
import {CommonImageType} from "types-store";
import {Buttons} from "shared/tools";
import style from "../styles";

//
type Props = {
    focusedImage: CommonImageType,
    editMode: boolean,
    toggleEditMode: any
}

const FocusedImage = (props: Props) =>
    props.focusedImage ? (
        <View style={style.focusedImageWrapper}>
            <ImageWithColorStrip
                image={props.focusedImage}
                style={style.focusedImageWrapper}
                editMode={props.editMode}
            />
            <Buttons.IconButton
                style={style.focusedImageEditButton}
                name={props.editMode ? "pencil-box" : "pencil-box-outline"}
                pressMethod={props.toggleEditMode}
                size={30}
            />
        </View>
    ) : (
        <LoadingView style={style.focusedImageWrapper}/>
    );


export default FocusedImage;
