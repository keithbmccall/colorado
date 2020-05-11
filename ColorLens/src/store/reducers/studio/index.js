//evaluate actions
import {
  FETCH_STUDIO_IMAGES,
  SAVE_STUDIO_IMAGES,
  SET_FOCUSED_IMAGE,
  SET_SWATCHES_ON_IMAGE
} from "../../actions/studio";
import { setSwatchesOnStudioImages } from "./util";

const initialState = {
  studioImages: [],
  focusedImage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload,
        focusedImage: action.payload[0]
      };
    case SAVE_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload
      };
    case SET_FOCUSED_IMAGE:
      return {
        ...state,
        focusedImage: action.payload
      };
    case SET_SWATCHES_ON_IMAGE:
      return {
        ...state,
        studioImages: setSwatchesOnStudioImages({
          studioImages: state.studioImages,
          imageWithSwatch: action.payload
        })
      };
    default:
      return state;
  }
};
