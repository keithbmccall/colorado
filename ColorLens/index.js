import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/config";
import { LoadingView } from "./src/containers";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import "react-native-gesture-handler";

if (process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    // trackAllPureComponents: true
  });
}

const ReduxWrapper = () => {
  persistor.purge();
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxWrapper);
