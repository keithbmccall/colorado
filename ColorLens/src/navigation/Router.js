import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import LibraryScreen from "../screens/main/library/LibraryScreen";
import CameraScreen from "../screens/main/camera/CameraScreen";
import ModalScreen from "../screens/modal/ModalScreen";

let view = "Camera";
// let view = "Home";
//
const MainStack = createMaterialTopTabNavigator(
  {
    Camera: CameraScreen,
    Home: LibraryScreen
  },
  {
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
  }
);
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: ModalScreen
    }
  },
  {
    initialRouteName: 'Modal',
    mode: "card",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
