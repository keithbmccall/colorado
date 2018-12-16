import { createAppContainer } from 'react-navigation';
// you can also import from @react-navigation/native

const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;