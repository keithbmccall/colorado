import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ImageWithColorStrip, Buttons } from "#containers";
import style from "../styles";

const ImageStudio = props => {
  const { onEditPress, onPress, image } = props;

  return (
    <View style={style.imageStudioWrapper}>
      <ImageWithColorStrip
        image={image}
        style={style.imageStudioWrapper}
        onStripPress={onPress}
        onStripLongPress={onPress}
        isStudio
      />
      <Buttons.Icon
        style={style.imageStudioEditButton}
        name="pencil-box-outline"
        onPress={onEditPress}
        size={35}
      />
    </View>
  );
};

ImageStudio.propTypes = {
  onPress: PropTypes.func.isRequired,
  onEditPress: PropTypes.func.isRequired,
  image: PropTypes.object
};

ImageStudio.defaultProps = {
  onPress: null,
  onEditPress: null,
  image: {}
};
export default ImageStudio;
