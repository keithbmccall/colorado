import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import PalettesScreen from "../screens/PaletteScreen";
import CameraScreen from "../screens/CameraScreen";


const RootStack = createBottomTabNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
