import {combineReducers} from "redux";
import studioReducer from "./studioReducer";
import cameraRollReducer from "./cameraRollReducer";

export default combineReducers({
    // @ts-ignore
    studio: studioReducer,
    // @ts-ignore
    cameraRoll: cameraRollReducer
});
