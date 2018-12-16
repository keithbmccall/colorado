import { createStackNavigator, createAppContainer } from 'react-navigation';
import CameraScreen from '../containers/camera/CameraScreen';
import PalettesScreen from '../containers/palettes/PaletteScreen';

const RootStack = createStackNavigator(
  {
    Home: PalettesScreen,
    Camera: CameraScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
