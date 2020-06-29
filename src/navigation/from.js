export const fromCameraRollScreen = params => {
  return {
    prevStack: "modal",
    prevScreen: "CameraRollScreen",
    ...params
  };
};

export const fromImageStudioScreen = params => {
  return {
    prevStack: "tab",
    prevScreen: "ImageStudioScreen",
    ...params
  };
};
