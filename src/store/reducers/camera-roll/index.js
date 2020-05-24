import {
  FETCH_CAMERA_IMAGES,
  SAVE_IMAGE_STATE,
  UNSELECT_ALL_IMAGES
} from "../../actions/camera-roll";
import { unselectCameraImages } from "./util";

const initialState = {
  cameraImages: [],
  selectedImages: [],
  pageInfo: {}
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CAMERA_IMAGES:
      return {
        ...state,
        cameraImages: payload.images || initialState.cameraImages,
        pageInfo: payload.pageInfo || initialState.pageInfo
      };
    case SAVE_IMAGE_STATE:
      const { images, selectedImages } = payload;
      return {
        ...state,
        cameraImages: images,
        selectedImages: selectedImages.length ? selectedImages : initialState.selectedImages
      };
    case UNSELECT_ALL_IMAGES:
      return {
        ...state,
        cameraImages: unselectCameraImages(state.cameraImages),
        selectedImages: initialState.selectedImages
      };
    default:
      return state;
  }
};
