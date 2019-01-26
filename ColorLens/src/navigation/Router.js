import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";

const RootStack = createMaterialTopTabNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home",
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      tabStyle:{
        height:120
      },
      activeTintColor: "#e91e63",
      inactiveTintColor: 'navy',
      labelStyle: {
        fontSize: 17,
      },
      style: {
        backgroundColor: "#ddd"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
