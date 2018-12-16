import { createAppContainer,createMaterialTopTabNavigator } from "react-navigation";

import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";

const RootStack = createMaterialTopTabNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen
  },
  {
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
