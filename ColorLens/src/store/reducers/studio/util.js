export const setSwatchesOnStudioImages = ({ studioImages, imageWithSwatch }) => {
  const studioImagesList = studioImages.slice(0);
  studioImagesList.find((image, index) => {
    if (image.id === imageWithSwatch.id) {
      studioImagesList[index] = imageWithSwatch;
    }
  });
  return studioImagesList;
};
