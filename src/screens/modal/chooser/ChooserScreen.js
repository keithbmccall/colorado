import React, { useRef, useState, useMemo, useCallback } from "react";
import { View, PanResponder, Image } from "react-native";
import PropTypes from "prop-types";
import Inspector from "#containers/inspector/Inspector";
import { getImageHeightOnContain } from "#utils/image.util";
import style from "./styles";
import API from "#helpers/api";
import ColorStripContainer from "#containers/color-strips/ColorStripContainer";
import { fallbackSwatch } from "#enum/colors.enum";
import { defaultParams } from "#navigation/enum";

const initialState = {
  color: fallbackSwatch.hex,
  editMode: false
};

const ChooserScreen = props => {
  const {
    params: { studioImage }
  } = props;
  const { uri } = studioImage;
  const [color, setColor] = useState(initialState.color);
  const [editMode, setEditMode] = useState(initialState.editMode);

  const swatch = useMemo(() => ({ hex: color }), [color]);

  const imageDimensions = useMemo(() => {
    const { width } = style.imageContainer;

    return {
      height: getImageHeightOnContain(studioImage, width),
      width
    };
  }, [studioImage]);

  const { panHandlers } = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: e => {
        API.getPixel({ e, uri, imageDimensions }, setColor, err =>
          console.log("error in chooserscreen.findcolor", err)
        );
      }
    })
  ).current;

  const onStripPress = useCallback(color => {
    setColor(color.hex);
  });

  const onStripLongPress = useCallback(color => {
    console.log("longPress:editModeSet!", { color });
    setEditMode(!editMode);
  });

  return (
    <View>
      <View style={style.chooserWrapper}>
        <Image
          {...panHandlers}
          style={{
            ...style.imageContainer,
            ...imageDimensions
          }}
          source={{
            uri
          }}
          resizeMethod={"resize"}
        />
        <View style={style.colorStripWrapper}>
          <ColorStripContainer
            image={studioImage}
            isStudio={true}
            style={style.colorStripContainer}
            onPress={onStripPress}
            onLongPress={onStripLongPress}
          />
        </View>
      </View>
      <Inspector wrapperStyle={style.inspectorWrapper} swatch={swatch} />
    </View>
  );
};

ChooserScreen.defaultProps = {
  params: defaultParams
};

ChooserScreen.propTypes = {
  params: PropTypes.shape({
    studioImage: PropTypes.object
  })
};

export default ChooserScreen;
