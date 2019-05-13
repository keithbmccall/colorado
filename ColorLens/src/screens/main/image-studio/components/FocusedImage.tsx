import React from "react";
import {TouchableOpacity, View} from "react-native";
import {ImageWithColorStrip, LoadingView} from "shared/containers";
import style from "../styles";
import {CommonImageType} from "types-store";

//
type Props = {
    focusedImage: CommonImageType
}

const FocusedImage = (props: Props) =>
    props.focusedImage ? (
        <View style={style.focusedImageWrapper}>
            <ImageWithColorStrip
                image={props.focusedImage}
                style={style.focusedImageWrapper}
            />
            <TouchableOpacity onPress={() => console.log('fuck boy')}
                              style={{
                                  backgroundColor: 'pink',
                                  height: 20,
                                  width: 20,
                                  position: 'absolute',
                                  top: 10,
                                  right: 20
                              }} />
        </View>
    ) : (
        <LoadingView style={style.focusedImageWrapper}/>
    );

export default FocusedImage;
