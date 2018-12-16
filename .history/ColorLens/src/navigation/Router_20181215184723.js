import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import CameraScreen from "../containers/camera/CameraScreen";
import PalettesScreen from "../containers/palettes/PaletteScreen";

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
