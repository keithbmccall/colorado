import React from 'react'


import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";
import Layout from '../shared/Layout';

const RootStack = createMaterialTopTabNavigator(
  {
    Home: <Layout><PalettesScreen/></Layout>,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home",
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 17
      },
      style: {
        backgroundColor: "blue"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
