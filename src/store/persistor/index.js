import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["app", "cameraRoll"],
  stateReconciler: autoMergeLevel2
};

export const createPersistStore = rootReducer => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return {
    persistStore,
    persistedReducer
  };
};
