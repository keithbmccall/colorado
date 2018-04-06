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
import InspectScreen from "./components/camera/InspectScreen";
//
import LibraryScreen from "./components/library/LibraryScreen";
//
const ImageRouter = TabNavigator(
  {
    Inspect: {
      screen: InspectScreen
    },
    Camera: {
      screen: CameraScreen
    }
  },
  {
    initialRouteName: "Camera",
    swipeEnabled: false,
    animationEnabled: false,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
export const Router = TabNavigator(
  {
    ImageRouter: {
      screen: ImageRouter
    },
    Library: {
      screen: LibraryScreen
    }
  },
  {
    initialRouteName: "ImageRouter",
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
