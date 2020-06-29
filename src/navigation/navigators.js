export const STUDIO = "studio";
export const INSPECT = "inspect";
export const CAMERA_ROLL = "camera roll";

const getStack = screen => {
  switch (screen) {
    case STUDIO:
    case "camera":
    case "library":
      return "tab";
    case INSPECT:
    case CAMERA_ROLL:
      return "modal";
    default:
      return "library";
  }
};

export const navigateTo = ({ navigate }, screen, params) => {
  navigate(getStack(screen), { screen, params });
};

export const ROUTE_PARAMS_PATH = "route.params.params";
