import { FETCH_CAMERA_IMAGES } from "store/actions/cameraRollActions";

const initialState = {
  cameraImages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMERA_IMAGES:
      return {
        ...state,
        cameraImages: action.payload
      };
    default:
      return state;
  }
};
