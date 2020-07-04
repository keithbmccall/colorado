const createFlipperMiddleware = () => {
  return require("redux-flipper").default;
};

const createThunkMiddleware = () => {
  return require("redux-thunk").default;
};

export const composeMiddleware = () => {
  const middleware = [createThunkMiddleware()];

  if (__DEV__) {
    middleware.push(createFlipperMiddleware()());
  }

  return middleware;
};
