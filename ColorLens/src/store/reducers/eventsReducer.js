//evaluate actions
import {
  FETCH_STUDIO_IMAGES,
  SAVE_STUDIO_IMAGES
} from "../actions/actionTypes";

const initialState = {
  studioImages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload
      };
    case SAVE_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload
      };
    default:
      return state;
  }
};
