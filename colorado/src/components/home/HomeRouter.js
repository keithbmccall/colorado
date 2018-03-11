import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button } from "react-native";
import RegularPage from "./RegularPage";
import SettingsPage from "./SettingsPage";
import PhotosPage from "./PhotosPage";

export const HomeRouter = TabNavigator(
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
