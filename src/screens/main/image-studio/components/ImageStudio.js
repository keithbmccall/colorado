import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  ImageWithColorStrip
  // Buttons
} from "#containers";
import style from "../styles";

const ImageStudio = props => {
  const {
    editMode,
    // toggleEditMode,
    onLongPress,
    onPress,
    image
  } = props;

  return (
    <View style={style.imageStudioWrapper}>
      <ImageWithColorStrip
        image={image}
        style={style.imageStudioWrapper}
        editMode={editMode}
        onStripPress={onPress}
        onStripLongPress={onLongPress}
        isStudio
      />
      {/*<Buttons.IconButton*/}
      {/*  style={style.imageStudioEditButton}*/}
      {/*  name={editMode ? "pencil-box" : "pencil-box-outline"}*/}
      {/*  onPress={toggleEditMode}*/}
      {/*  size={35}*/}
      {/*/>*/}
      {/*{!editMode && (*/}
      {/*  <Buttons.IconButton*/}
      {/*    style={style.imageStudioTrashButton}*/}
      {/*    name={"trash-can-outline"}*/}
      {/*    onPress={toggleEditMode}*/}
      {/*    size={35}*/}
      {/*  />*/}
      {/*)}*/}
    </View>
  );
};

ImageStudio.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
  image: PropTypes.object
};

ImageStudio.defaultProps = {
  editMode: false,
  onPress: null,
  onLongPress: null,
  image: {}
};
export default ImageStudio;
