import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";
import windowReducer from "./windowReducer";
import searchByCityReducer from "./searchByCityReducer";

export default combineReducers({
  events: eventsReducer,
  auth: authReducer,
  window: windowReducer,
  cityEvents: searchByCityReducer
});
