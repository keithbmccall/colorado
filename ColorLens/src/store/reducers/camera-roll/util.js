export const unselectCameraImages = images => {
  // unselects all image and passes new image array to redux state
  return images.map(image => {
    image.isSelected = false;
    return image;
  });
};
