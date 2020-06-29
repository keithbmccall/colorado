import { defaultCameraRollOptionsEnum } from "#enum";

/**
 *
 * @param images
 * @returns {string}
 */
export const renderSelectedImageCount = images => {
  const selectedImages = images.filter(image => image.isSelected);
  if (selectedImages.length === 0 || selectedImages.length === 1) {
    return `1 Image`;
  } else {
    return `${selectedImages.length} Images`;
  }
};

/**
 *
 * @param selectedImages
 * @param image
 * @returns {object[]}
 */
export const checkSelectedImages = (selectedImages, image) => {
  const selectedArray = selectedImages.slice(0);
  const n = selectedArray.indexOf(image);

  if (n >= 0) {
    selectedArray.splice(n, 1);
  } else {
    selectedArray.push(image);
  }

  return selectedArray;
};

/**
 *
 * @param images
 * @param selectedImages
 * @param image
 * @returns {{images: object[], selectedImages: object[]}}
 */
export const selectOrUnselectImage = ({ images, selectedImages, image }) => {
  let newSelectedImages = [...selectedImages];

  images.find(stateImage => {
    if (stateImage.id === image.id) {
      stateImage.isSelected = !stateImage.isSelected;
      newSelectedImages = checkSelectedImages(selectedImages, stateImage);
    }
  });

  return {
    images,
    selectedImages: newSelectedImages
  };
};

/**
 *
 * @returns {{first: number, assetType: string}}
 */
export const getCameraRollOptions = () => {
  return defaultCameraRollOptionsEnum;
};

/**
 *
 * @param images
 * @returns {string}
 */
export const renderButtonText = images => {
  return `Import ${renderSelectedImageCount(images)} To The Studio`;
};
