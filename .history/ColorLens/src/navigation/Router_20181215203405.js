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
    activeColor: '#aa00ff',
    inactiveColor:'#ffaa00'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
