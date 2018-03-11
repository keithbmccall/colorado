import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native";
//
import CameraScreen from "./components/camera/CameraScreen";
import HomeScreen from "./components/home/HomeScreen";
import LibraryScreen from "./components/library/LibraryScreen";
//
export const Router = TabNavigator(
  {
    Camera: {
      screen: CameraScreen
    },
    Home: {
      screen: HomeScreen
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
