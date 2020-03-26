import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryScreen from "../screens/main/library/LibraryScreen";
import CameraScreen from "../screens/main/camera/CameraScreen";
import ImageStudio from "../screens/main/image-studio/ImageStudioScreen";
import ModalIndex from "../screens/modal/ModalIndex";

const view = "Studio";
// let view = "Camera";
//

const Main = createMaterialTopTabNavigator();
const Root = createStackNavigator();

const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName={view}
      screenOptions={{
        initialRouteName: view,
        lazy: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
          tabStyle: {
            height: 120
          },
          activeTintColor: "#e91e63",
          inactiveTintColor: "navy",
          labelStyle: {
            fontSize: 17
          },
          style: {
            backgroundColor: "#ddd",
            display: "none"
          }
        }
      }}
    >
      <Main.Screen name="Studio" component={ImageStudio} />
      <Main.Screen name="Camera" component={CameraScreen} />
      <Main.Screen name="Library" component={LibraryScreen} />
    </Main.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Modal">
        <Root.Screen name="Main" component={MainStack} />
        <Root.Screen name="Modal" component={ModalIndex} mode="card" headerMode="none" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

// const MainStack = createMaterialTopTabNavigator(
//   {
//     Studio: ImageStudio,
//     Camera: CameraScreen,
//     Library: LibraryScreen
//   },
//   {
//     initialRouteName: view,
//     lazy: true,
//     tabBarPosition: "bottom",
//     tabBarOptions: {
//       tabStyle: {
//         height: 120
//       },
//       activeTintColor: "#e91e63",
//       inactiveTintColor: "navy",
//       labelStyle: {
//         fontSize: 17
//       },
//       style: {
//         backgroundColor: "#ddd",
//         display: "none"
//       }
//     }
//   }
// );
// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack
//     },
//     Modal: {
//       screen: ModalIndex
//     }
//   },
//   {
//     initialRouteName: "Modal",
//     mode: "card",
//     headerMode: "none"
//   }
// );

export default Navigation;
