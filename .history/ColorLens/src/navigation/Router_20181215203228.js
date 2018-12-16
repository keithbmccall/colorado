import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";

const RootStack = createMaterialBottomTabNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen
  },
  {
    shifting: true,
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "blue"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
