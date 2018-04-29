import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

//
// import RegularPage from "./components/home/RegularPage";
// import SettingsPage from "./components/home/SettingsPage";
// import PhotosPage from "./components/home/PhotosPage";
//
import CameraScreen from "./components/camera/CameraScreen";
import LibraryScreen from "./components/library/LibraryScreen";
//

export const Router = TabNavigator(
  {
    Camera: {
      screen: CameraScreen
    },
    Library: {
      screen: LibraryScreen
    }
    // ,
    // Viewport: {
    //   screen: ViewScreen
    // }
  },
  {
    initialRouteName: "Camera",
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
