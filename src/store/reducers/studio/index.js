//evaluate actions
import {
  FETCH_STUDIO_IMAGES,
  SAVE_STUDIO_IMAGES,
  SET_STUDIO_IMAGE,
  SET_SWATCHES_ON_IMAGE,
  SET_SWATCHES_ON_STUDIO_IMAGE
} from "../../actions/studio";

const initialState = {
  studioImages: [],
  imageStudioImage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload,
        imageStudioImage: action.payload[0]
      };
    case SAVE_STUDIO_IMAGES:
      return {
        ...state,
        studioImages: action.payload.updatedImages,
        imageStudioImage: action.payload.imageStudioImage
      };
    case SET_STUDIO_IMAGE:
      return {
        ...state,
        imageStudioImage: action.payload
      };
    case SET_SWATCHES_ON_IMAGE:
      return {
        ...state,
        studioImages: action.payload
      };
    case SET_SWATCHES_ON_STUDIO_IMAGE:
      return {
        ...state,
        imageStudioImage: action.payload
      };
    default:
      return state;
  }
};
