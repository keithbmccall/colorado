import { defaultCameraRollOptionsEnum } from "#enum";

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

  if (n >= 0) {
    selectedArray.splice(n, 1);
  } else {
    selectedArray.push(image);
  }

  return selectedArray;
};

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

export const getCameraRollOptions = () => {
  return defaultCameraRollOptionsEnum;
};

export const renderButtonText = images => {
  return `Import ${renderSelectedImageCount(images)} To The Studio`;
};

export const selectImage = ({ images, selectedImages, saveImageState }) => {
  return async image => {
    const { images: _images, selectedImages: _selectedImages } = selectOrUnselectImage({
      images,
      selectedImages,
      image
    });

    await saveImageState({ images: _images, selectedImages: _selectedImages });
  };
};

export const confirmSelectedImages = ({
  navigation,
  saveImagesToStudio,
  unselectAllImages,
  selectedImages
}) => {
  return async () => {
    await saveImagesToStudio(selectedImages);
    navigation.navigate("Main", {
      screen: "Studio",
      params: {
        screen: "Modal",
        selectedImages
      }
    });
    unselectAllImages();
  };
};
