import { SEARCH_BY_CITY } from "../actions/actionTypes";

const initialState = {
  city: "",
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_CITY:
      return {
        ...state,
        city: action.payload.city,
        events: action.payload.events
      };
    default:
      return state;
  }
};
