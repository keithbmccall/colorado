import React from "react";
import { View } from "react-native";
import style from "./styles";
import Button from "#containers/buttons";
import { CAMERA_ROLL, navigateTo } from "#navigation/navigators";
import { fromModalNavigator } from "#navigation/from";
import PropTypes from "prop-types";
import Placeholder from "#containers/tools/Placeholder";
import { Logo } from "#branding";

const ModalNavigator = props => {
  const { navigation, params } = props;

  const { type: screen = defaultParams.type, prevScreen = defaultParams.prevScreen } = params;

  const onBackPress = () =>
    navigateTo(navigation, prevScreen, fromModalNavigator({ screen, ...params }));

  return (
    <View style={style.navigatorWrapper}>
      {navigation.canGoBack() ? (
        <Button.Icon name={Button.Icon.enum.backArrow} onPress={onBackPress} />
      ) : (
        <Placeholder />
      )}
      <Logo />
      <Placeholder />
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
