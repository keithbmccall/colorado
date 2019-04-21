import {combineReducers} from "redux";
import studioReducer from "./studioReducer";
import cameraRollReducer from "./cameraRollReducer";

export default combineReducers({
    studio: studioReducer,
    cameraRoll: cameraRollReducer
});
