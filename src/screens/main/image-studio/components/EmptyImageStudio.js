import React, { Fragment } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Button from "#containers/buttons";
import style from "../styles";
import Text from "#containers/text";
import Divider from "#containers/tools/Divider";
import { colors } from "#styles";

const EmptyImageStudio = props => (
  <Fragment>
    <View style={style.imageStudioEmptyWrapper}>
      <Text.Title>No Images Yet!</Text.Title>
      <Text.Sentence>Please select a photo and take a photo!</Text.Sentence>
      <Divider width={10} color={colors.transparent} />
      {props.launchCameraRoll && (
        <Button.Icon
          name={Button.Icon.enum.cameraRoll}
          onPress={props.launchCameraRoll}
          size={40}
        />
      )}
    </View>
    <Divider />
  </Fragment>
);

EmptyImageStudio.propTypes = {
  launchCameraRollScreen: PropTypes.func
};

export default EmptyImageStudio;
