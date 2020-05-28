import { createSelector } from "reselect";

//
const studioImages = studio => studio.studioImages;
const imageStudio = studio => studio.imageStudioImage;

export const store = state => state.studio;
export const studioImagesSelector = createSelector(store, studioImages);
export const imageStudioImageSelector = createSelector(store, imageStudio);
