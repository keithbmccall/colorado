import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

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
      screen: SettingsPage,

      navigationOptions: ({ navigation }) => ({
        title: "Compare",
        tabBarIcon: ({ tintColor }) => (
          <Icon.Button
            name="eye"
            backgroundColor="transparent"
            color="#91268d"
            onPress={() => navigation.navigate("Settings")}
          />
        )
      })
    },
    Regular: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        title: "Browser",
        tabBarIcon: ({ tintColor }) => (
          <Icon.Button
            name="home"
            backgroundColor="transparent"
            color="#91268d"
            onPress={() => navigation.navigate("Regular")}
          />
        )
      })
    },

    Photos: {
      screen: PhotosPage,
      navigationOptions: ({ navigation }) => ({
        title: "Images",
        tabBarIcon: ({ tintColor }) => (
          <Icon.Button
            name="folder-images"
            backgroundColor="transparent"
            color="#91268d"
            onPress={() => navigation.navigate("Photos")}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Regular",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "white"
      }
    }
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
