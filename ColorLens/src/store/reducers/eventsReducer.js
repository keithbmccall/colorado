//evaluate actions
import { CREATE_EVENT, FETCH_EVENTS } from "../actions/actionTypes";

const initialState = {
  events: [],
  eventDetails: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case CREATE_EVENT:
      return {
        ...state,
        eventDetails: action.payload
      };
    default:
      return state;
  }
};
