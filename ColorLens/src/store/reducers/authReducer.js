import { ATTEMPT_LOGIN, ATTEMPT_REGISTER } from "../actions/actionTypes";

const initialState = {
  token: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return {
        ...state,
        auth: action.payload
      };
    case ATTEMPT_REGISTER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
