export const fromCameraRollScreen = params => {
  return {
    prevStack: "modal",
    prevScreen: "CameraRollScreen",
    ...params
  };
};
