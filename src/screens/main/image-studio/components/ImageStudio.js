import React, { Component } from "react";
import { View } from "react-native";
import { ImageWithColorStrip, Buttons } from "#containers";
import style from "../styles";

class ImageStudio extends Component {
  render() {
    const { image = {} } = this.props;
    return (
      <View style={style.imageStudioWrapper}>
        <ImageWithColorStrip
          image={image}
          style={style.imageStudioWrapper}
          editMode={this.props.editMode}
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          isStudio
        />
        <Buttons.IconButton
          style={style.imageStudioEditButton}
          name={this.props.editMode ? "pencil-box" : "pencil-box-outline"}
          onPress={this.props.toggleEditMode}
          size={35}
        />
        {!this.props.editMode && (
          <Buttons.IconButton
            style={style.imageStudioTrashButton}
            name={"trash-can-outline"}
            onPress={this.props.toggleEditMode}
            size={35}
          />
        )}
      </View>
    );
  }
}

ImageStudio.defaultProps = {
  editMode: false,
  onPress: null,
  onLongPress: null
};
export default ImageStudio;
