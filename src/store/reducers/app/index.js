import { BEGIN_LOADING, END_LOADING } from "#store/actions/app";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
