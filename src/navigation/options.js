import { CAMERA_ROLL, MODAL, STUDIO } from "#navigation/navigators";

const rootInitialRouteName = MODAL;
const tabInitialRouteName = STUDIO;
const modalInitialRouteName = CAMERA_ROLL;

const tabOptions = {
  tabInitialRouteName,
  tabBarOptions: {
    style: {
      display: "none"
    }
  }
};

const modalOptions = {
  modalInitialRouteName,
  modalBarOptions: {
    style: {}
  }
};

const rootOptions = {
  rootInitialRouteName,
  rootMode: "card",
  screenOptions: {
    headerShown: false
  },
  headerMode: "none"
};

export const navigatorOptions = {
  ...tabOptions,
  ...rootOptions,
  ...modalOptions
};
