export const MODAL = "modal";
export const TAB = "tab";
//
export const STUDIO = "studio";
export const INSPECT = "inspect";
export const CAMERA_ROLL = "camera roll";
export const CHOOSER = "chooser";
export const CAMERA = "camera";
export const LIBRARY = "library";

const getStack = screenTo => {
  switch (screenTo) {
    case STUDIO:
    case CAMERA:
    case LIBRARY:
      return TAB;
    case INSPECT:
    case CAMERA_ROLL:
    case CHOOSER:
      return MODAL;
    default:
      return LIBRARY;
  }
};

/**
 *
 * @param navigate - global navigator
 * @param screenTo - screen to navigate to
 * @param params - params to send to navigator/component
 */
export const navigateTo = ({ navigate }, screenTo, params) => {
  // navigate(navigator stack, { screen: screen to go to, paramas: extra props })
  navigate(getStack(screenTo), { screen: screenTo, params: { ...params, type: screenTo } });
};

export const ROUTE_PARAMS_PATH = "route.params.params";
