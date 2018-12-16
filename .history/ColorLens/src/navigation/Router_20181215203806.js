import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";

const RootStack = createMaterialTopTabNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen,
    Settings: CameraScreen
  },
  {
    shifting: false,
    initialRouteName: "Home",
    activeColor: "#aa00ff",
    inactiveColor: "#ffaa00",
    barStyle: { backgroundColor: "#999" }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
