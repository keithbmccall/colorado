import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native";
//
import RegularPage from "./components/home/RegularPage";
import SettingsPage from "./components/home/SettingsPage";
import PhotosPage from "./components/home/PhotosPage";
//
import CameraScreen from "./components/camera/CameraScreen";
import LibraryScreen from "./components/library/LibraryScreen";
//
const HomeRouter = TabNavigator(
  {
    Settings: {
      screen: SettingsPage
    },
    Regular: {
      screen: RegularPage
    },

    Photos: {
      screen: PhotosPage
    }
  },
  {
    initialRouteName: "Regular"
  }
);

export const Router = TabNavigator(
  {
    Camera: {
      screen: CameraScreen
    },
    Home: {
      screen: HomeRouter
    },
    Library: {
      screen: LibraryScreen
    }
  },
  {
    initialRouteName: "Home",
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
