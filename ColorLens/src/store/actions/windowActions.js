import { WINDOW_RESIZE } from "./actionTypes";

export const windowResize = () => {
  return {
    type: WINDOW_RESIZE,
    payload: window.innerWidth
  };
};
