import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryScreen from "../screens/main/library/LibraryScreen";
import CameraScreen from "../screens/main/camera/CameraScreen";
import ImageStudioScreen from "../screens/main/image-studio/ImageStudioScreen";
import ModalIndex from "../screens/modal/ModalIndex";
import { navigatorOptions } from "./options";

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
  console.log("tab", { tab });
  return (
    <Tab.Navigator initialRouteName={tabInitialRouteName} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="studio" component={ImageStudioScreen} />
      <Tab.Screen name="camera" component={CameraScreen} />
      <Tab.Screen name="library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export const Navigation = nav => {
  console.log("nav", { nav });
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName={rootInitialRouteName} screenOptions={screenOptions}>
        <Root.Screen name="tab" component={TabStack} />
        <Root.Screen name="modal" component={ModalIndex} mode={rootMode} headerMode={headerMode} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
