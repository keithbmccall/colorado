import React, { Component } from "react";
import { TabNavigator } from "react-navigation";


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