import { createSelector } from "reselect";

const studioStore = state => state.studio;
//
const studioImages = studio => studio.studioImages;
const focusedImage = studio => studio.focusedImage;

export const studioImagesSelector = createSelector(studioStore, studioImages);

export const focusedImageSelector = createSelector(studioStore, focusedImage);
