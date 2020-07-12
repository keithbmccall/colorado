import React, { useRef, useState, useMemo, useCallback } from "react";
import { View, PanResponder, Image } from "react-native";
import PropTypes from "prop-types";
import { Text } from "#containers";
import { layoutGrid } from "#styles";
import { getImageHeightOnContain } from "#utils";
import style from "./styles";
import { findColor } from "./methods";
import { ColorStripContainer } from "#containers";

const initialState = {
  color: "pink",
  editMode: false
};

const ChooserScreen = props => {
  const {
    params: { studioImage }
  } = props;
  const { uri } = studioImage;
  console.log(studioImage);

  const [color, setColor] = useState(initialState.color);
  const [editMode, setEditMode] = useState(initialState.editMode);

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
        findColor({ e, uri, imageDimensions }, setColor, err =>
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
        <View style={layoutGrid.halfQuarter}>
          <ColorStripContainer
            image={studioImage}
            isStudio={true}
            style={style.colorStripWrapper}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        </View>
      </View>
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
