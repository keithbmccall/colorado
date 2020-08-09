import React from "react";
import { View } from "react-native";
import Text from "#containers/text";
import style from "./styles";
import Button from "#containers/buttons";
import { CAMERA_ROLL, navigateTo } from "#navigation/navigators";
import { fromModalNavigator } from "#navigation/from";
import PropTypes from "prop-types";

const ModalNavigator = props => {
  const { navigation, params } = props;

  const { type: screen = defaultParams.type, prevScreen = defaultParams.prevScreen } = params;

  const onBackPress = navigateTo(navigation, prevScreen, fromModalNavigator({ screen, ...params }));

  return (
    <View style={style.navigatorWrapper}>
      <Button.Icon name={Button.Icon.enum.backArrow} onPress={onBackPress} />
      <Text.Title>{screen.toUpperCase()}</Text.Title>
      <Text.Title>other</Text.Title>
    </View>
  );
};

const defaultParams = {
  type: "__no_type_yet__!",
  prevScreen: CAMERA_ROLL
};

ModalNavigator.defaultProps = {
  navigation: {},
  params: defaultParams
};

ModalNavigator.propTypes = {
  navigation: PropTypes.object,
  params: PropTypes.object
};

export default ModalNavigator;
