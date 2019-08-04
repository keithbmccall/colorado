import {createAppContainer, createMaterialTopTabNavigator, createStackNavigator} from "react-navigation";
import LibraryScreen from "../screens/main/library/LibraryScreen";
import CameraScreen from "../screens/main/camera/CameraScreen";
import ImageStudio from "../screens/main/image-studio/ImageStudioScreen";
import ModalIndex from "../screens/modal/ModalIndex";

let view = "Studio";
// let view = "Camera";
//
const MainStack = createMaterialTopTabNavigator(
    {
        Studio: ImageStudio,
        Camera: CameraScreen,
        Library: LibraryScreen
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
            screen: ModalIndex
        }
    },
    {
        initialRouteName: "Main",
        mode: "card",
        headerMode: "none"
    }
);

const Navigation = createAppContainer(RootStack);

export default Navigation;

