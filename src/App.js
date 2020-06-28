import React, { useEffect } from "react";
import Navigation from "#navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AsyncStorage } from "react-native";
import { errorHandler, setGlobalHandler } from "#utils";

console.disableYellowBox = true;

const App = () => {
  useEffect(() => {
    setGlobalHandler(wrapGlobalHandler);
  });

  const wrapGlobalHandler = async (error, isFatal) => {
    // If the error kills our app in Release mode, make sure we don't rehydrate
    if (isFatal && !__DEV__) AsyncStorage.clear();

    //Once finished, make sure react-native also gets the error
    if (errorHandler) {
      errorHandler(error, isFatal);
    }
  };

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
