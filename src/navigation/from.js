import { CAMERA_ROLL, STUDIO } from "#navigation/navigators";

export const fromCameraRollScreen = params => {
  return {
    prevStack: "modal",
    prevScreen: CAMERA_ROLL,
    ...params
  };
};

export const fromImageStudioScreen = params => {
  return {
    prevStack: "tab",
    prevScreen: STUDIO,
    ...params
  };
};

export const fromModalNavigator = params => {
  return {
    prevStack: "modal",
    prevScreen: params.screen,
    ...params
  };
};
