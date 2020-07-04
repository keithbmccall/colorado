import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { createFlipperMiddleware, createThunkMiddleware } from "./middleware";

const initialState = {};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["app", "cameraRoll"],
  stateReconciler: autoMergeLevel2
};

const middleware = [createThunkMiddleware()];

if (__DEV__) {
  middleware.push(createFlipperMiddleware()());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = () =>
  createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export const store = initStore();

export const persistor = persistStore(store);
