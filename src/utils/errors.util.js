export const errorHandler = ErrorUtils.getGlobalHandler();

export const setGlobalHandler = handler => {
  ErrorUtils.setGlobalHandler(handler);
};
