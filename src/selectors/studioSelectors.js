import { createSelector } from "reselect";

const studioStore = state => state.studio;
//
const studioImages = studio => studio.studioImages;
const imageStudio = studio => studio.imageStudioImage;

export const studioImagesSelector = createSelector(studioStore, studioImages);

export const imageStudioImageSelector = createSelector(studioStore, imageStudio);
