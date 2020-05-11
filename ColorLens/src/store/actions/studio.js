export const SET_FOCUSED_IMAGE = "SET_FOCUSED_IMAGE";
export const FETCH_STUDIO_IMAGES = "FETCH_STUDIO_IMAGES";
export const SAVE_STUDIO_IMAGES = "SAVE_STUDIO_IMAGES";
export const TEMP_ADD_STUDIO_IMAGES = "TEMP_ADD_STUDIO_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";
export const SET_SWATCHES_ON_IMAGE = "SET_SWATCHES_ON_IMAGE";

export const setFocusedImage = image => dispatch =>
  dispatch({
    type: SET_FOCUSED_IMAGE,
    payload: image
  });

export const saveImagesToStudio = images => dispatch => {
  return dispatch({
    type: SAVE_STUDIO_IMAGES,
    payload: images
  });
};

export const setSwatchesOnImage = ({ swatches, image }) => dispatch => {
  return dispatch({
    type: SET_SWATCHES_ON_IMAGE,
    payload: {
      ...image,
      swatches
    }
  });
};
