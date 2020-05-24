import { combineReducers } from "redux";
import studioReducer from "./studio";
import cameraRollReducer from "./camera-roll";
import appReducer from "./app";

const rootReducer = combineReducers({
  studio: studioReducer,
  cameraRoll: cameraRollReducer,
  app: appReducer
});
export default rootReducer;
