export const renderSelectedImageCount = images => {
  const selectedImages = images.filter(image => image.isSelected);
  if (selectedImages.length === 0 || selectedImages.length === 1) {
    return `1 Image`;
  } else {
    return `${selectedImages.length} Images`;
  }
};
export const checkSelectedImages = (selectedImages, image) => {
  const selectedArray = selectedImages.slice(0);
  const n = selectedArray.indexOf(image);

  return n >= 0
    ? selectedArray.splice(n, 1) && selectedArray
    : selectedArray.push(image) && selectedArray;
};

export const selectOrUnselectImage = ({ images, selectedImages, image }) => {
  let newSelectedImages = [...selectedImages];
  const newImages = images.map(stateImage => {
    if (stateImage.id === image.id) {
      stateImage.isSelected = !stateImage.isSelected;
      newSelectedImages = checkSelectedImages(selectedImages, stateImage);
    }
    return stateImage;
  });
  return {
    images: newImages,
    selectedImages: newSelectedImages
  };
};
