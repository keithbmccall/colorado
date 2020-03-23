export const unSelectAllImages = images =>
  images.map(image => {
    image.isSelected = false;
    return image;
  });
export const renderSelectedImageCount = images => {
  const selectedImages = images.filter(image => image.isSelected);
  if (selectedImages.length === 0 || selectedImages.length === 1) {
    return `1 Image`;
  } else {
    return `${selectedImages.length} Images`;
  }
};
export const checkSelectedImages = (selectedImages, image) => {
  // adds images to selectedImages array/state
  const selectedArray = selectedImages.slice(0);
  const n = selectedArray.indexOf(image);
  // @ts-ignore
  return n >= 0
    ? selectedArray.splice(n, 1) && selectedArray
    : selectedArray.push(image) && selectedArray;
};

export const selectOrUnselectImage = (images, selectedImages, image) => {
  const stateImages = images.slice(0);
  let newSelectedImages = [...selectedImages];
  const newImages = stateImages.map(stateImage => {
    if (stateImage.tempId === image.tempId) {
      stateImage.isSelected = !stateImage.isSelected;
      newSelectedImages = checkSelectedImages(newSelectedImages, stateImage);
    }
    return stateImage;
  });
  return {
    images: newImages,
    selectedImages: newSelectedImages
  };
};
