import React, { useRef, useState, useMemo, useCallback } from "react";
import { View, PanResponder, Image } from "react-native";
import PropTypes from "prop-types";
import Text from "#containers/text";
import Inspector from "#containers/inspector/Inspector";
import { globalStyle, layoutGrid } from "#styles";
import { getImageHeightOnContain } from "#utils/image.util";
import style from "./styles";
import API from "#helpers/api";
import ColorStripContainer from "#containers/color-strips/ColorStripContainer";
import { fallbackSwatch } from "#enum/colors.enum";

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

  const onPress = useCallback(color => {
    console.log("press", { color });
  });

  const onLongPress = useCallback(color => {
    console.log("longPress", { color });
    setEditMode(!editMode);
  });

  return (
    <View>
      <Text.Title style={{ color }}>Chooser</Text.Title>
      <View style={layoutGrid.half}>
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
        <View style={globalStyle.flex1}>
          <ColorStripContainer
            image={studioImage}
            isStudio={true}
            style={style.colorStripWrapper}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        </View>
      </View>
      <Inspector wrapperStyle={{ ...layoutGrid.half }} swatch={swatch} />
    </View>
  );
};

ChooserScreen.defaultProps = {
  params: {
    studioImage: {}
  }
};

ChooserScreen.propTypes = {
  params: PropTypes.shape({
    studioImage: PropTypes.object
  })
};

export default ChooserScreen;
