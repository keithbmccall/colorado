import API from "#helpers/api";

export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";
export const SAVE_IMAGE_STATE = "SAVE_IMAGE_STATE";
export const UNSELECT_ALL_IMAGES = "UNSELECT_ALL_IMAGES";

export const fetchCameraImages = options => async dispatch => {
  const payload = await API.getCameraRollImages(options);
  return dispatch({
    type: FETCH_CAMERA_IMAGES,
    payload
  });
};

export const saveImageState = ({ images, selectedImages }) => dispatch => {
  return dispatch({
    type: SAVE_IMAGE_STATE,
    payload: { images, selectedImages }
  });
};

export const unselectAllImages = () => dispatch => {
  return dispatch({
    type: UNSELECT_ALL_IMAGES
  });
};
