import React, {Component} from "react";
import {TouchableOpacity, View} from "react-native";
import {ImageWithColorStrip, LoadingView} from "shared/containers";
import style from "../styles";
import {CommonImageType} from "types-store";

//
type Props = {
    focusedImage: CommonImageType
}
type State = {
    editMode: boolean
}

class FocusedImage extends Component<Props, State> {
    state = {
        editMode: false
    };
    toggleMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    render() {
        return this.props.focusedImage ? (
            <View style={style.focusedImageWrapper}>
                <ImageWithColorStrip
                    image={this.props.focusedImage}
                    style={style.focusedImageWrapper}
                    editMode={this.state.editMode}
                />
                <TouchableOpacity onPress={this.toggleMode}
                                  style={{
                                      backgroundColor: 'pink',
                                      height: 20,
                                      width: 20,
                                      position: 'absolute',
                                      top: 10,
                                      right: 20
                                  }}/>
            </View>
        ) : (
            <LoadingView style={style.focusedImageWrapper}/>
        );
    }
}

export default FocusedImage;
