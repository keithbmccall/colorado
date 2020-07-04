import { AsyncStorage } from "react-native";

const errorHandler = ErrorUtils.getGlobalHandler();

console.log("errorHandler", { errorHandler, ErrorUtils });
const wrapGlobalHandler = async (error, isFatal) => {
  // If the error kills our app in Release mode, make sure we don't rehydrate
  if (isFatal && !__DEV__) AsyncStorage.clear();

  //Once finished, make sure react-native also gets the error
  if (ErrorUtils) {
    errorHandler(error, isFatal);
  }
};

export const setGlobalHandler = () => {
  ErrorUtils.setGlobalHandler(wrapGlobalHandler);
};
