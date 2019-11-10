import {combineReducers} from "redux";
import studioReducer from "./studioReducer";
import cameraRollReducer from "./cameraRollReducer";
import appReducer from "./appReducer"


const rootReducer = combineReducers({
    studio: studioReducer,
    cameraRoll: cameraRollReducer,
    app: appReducer
});
export default rootReducer;
