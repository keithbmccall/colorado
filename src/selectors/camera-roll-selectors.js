import { createSelector } from "reselect";

//
const cameraRollImages = cameraRoll => cameraRoll.cameraImages;
const selectedImages = cameraRoll => cameraRoll.selectedImages;

export const store = state => state.cameraRoll;
export const cameraImagesSelector = createSelector(store, cameraRollImages);
export const selectedImagesSelector = createSelector(store, selectedImages);
