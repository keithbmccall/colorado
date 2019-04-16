import {combineReducers} from "redux";
import studioReducer from "./studioReducer";

export default combineReducers({
    studio: studioReducer
});
