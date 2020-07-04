import "./src/config";
import React from "react";
import { AppRegistry } from "react-native";
import Root from "./src/Root";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { LoadingView } from "./src/containers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";

const ReduxWrapper = () => {
  persistor.purge();

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
