import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryScreen from "../screens/main/library/LibraryScreen";
import CameraScreen from "../screens/main/camera/CameraScreen";
import ImageStudioScreen from "../screens/main/image-studio/ImageStudioScreen";
import Modal from "../screens/modal";
import { navigatorOptions } from "./options";
import { CAMERA, LIBRARY, MODAL, STUDIO, TAB } from "#navigation/navigators";
// import ChooserScreen from "../screens/modal/chooser/ChooserScreen";
// import InspectorScreen from "../screens/modal/inspect/InspectorScreen";
// import CameraRollScreen from "../screens/modal/camera-roll/CameraRollScreen";

const Tab = createMaterialTopTabNavigator();
const Root = createStackNavigator();
const {
  tabInitialRouteName,
  tabBarOptions,
  screenOptions,
  rootInitialRouteName,
  rootMode,
  headerMode
} = navigatorOptions;

const TabStack = tab => {
  console.log("tabStack", { tab });
  return (
    <Tab.Navigator initialRouteName={tabInitialRouteName} tabBarOptions={tabBarOptions}>
      <Tab.Screen name={STUDIO} component={ImageStudioScreen} />
      <Tab.Screen name={CAMERA} component={CameraScreen} />
      <Tab.Screen name={LIBRARY} component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default nav => {
  console.log("navStack", { nav });
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName={rootInitialRouteName} screenOptions={screenOptions}>
        <Root.Screen name={TAB} component={TabStack} />
        <Root.Screen name={MODAL} component={Modal} mode={rootMode} headerMode={headerMode} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
