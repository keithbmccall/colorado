export const createFlipperMiddleware = () => {
  return require("redux-flipper").default;
};

export const createThunkMiddleware = () => {
  return require("redux-thunk").default;
};
