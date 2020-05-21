import { studioSelectors } from "#selectors";
import { setSwatchesOnStudioImages } from "./util";

export const SET_STUDIO_IMAGE = "SET_STUDIO_IMAGE";
export const FETCH_STUDIO_IMAGES = "FETCH_STUDIO_IMAGES";
export const SAVE_STUDIO_IMAGES = "SAVE_STUDIO_IMAGES";
export const TEMP_ADD_STUDIO_IMAGES = "TEMP_ADD_STUDIO_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";
export const SET_SWATCHES_ON_IMAGE = "SET_SWATCHES_ON_IMAGE";
export const SET_SWATCHES_ON_STUDIO_IMAGE = "SET_SWATCHES_ON_STUDIO_IMAGE";

const { studioImagesSelector } = studioSelectors;

export const setImageStudioImage = image => dispatch => {
  return dispatch({
    type: SET_STUDIO_IMAGE,
    payload: image
  });
};

export const saveImagesToStudio = images => (dispatch, getState) => {
  const currentStudioImages = studioImagesSelector(getState());
  const updatedImages = [...currentStudioImages, ...images];

  return dispatch({
    type: SAVE_STUDIO_IMAGES,
    payload: { updatedImages, imageStudioImage: images[0] }
  });
};

export const setSwatchesOnStudioImage = ({ swatches, image }) => dispatch => {
  return dispatch({
    type: SET_SWATCHES_ON_STUDIO_IMAGE,
    payload: {
      ...image,
      swatches
    }
  });
};

export const setSwatchesOnImage = ({ swatches, image }) => (dispatch, getState) => {
  return dispatch({
    type: SET_SWATCHES_ON_IMAGE,
    payload: setSwatchesOnStudioImages({
      studioImages: studioImagesSelector(getState()),
      imageWithSwatch: {
        ...image,
        swatches
      }
    })
  });
};
