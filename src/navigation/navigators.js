export const STUDIO = "studio";

const getStack = screen => {
  switch (screen) {
    case "studio":
    case "camera":
    case "library":
      return "tab";
    default:
      return "library";
  }
};

export const navigateTo = ({ navigate }, screen, params) => {
  navigate(getStack(screen), { screen, params });
};
