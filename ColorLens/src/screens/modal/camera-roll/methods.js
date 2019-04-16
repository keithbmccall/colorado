const checkImages = (images, image) => {
  // toggles isSelected status/state on image
  let imagesArray = images.slice(0);
  imagesArray[image.tempId].isSelected = !imagesArray[image.tempId].isSelected;
  return imagesArray;
};
const checkSelectedImages = (selectedImages, image) => {
  // adds images to selectedImages array/state
  let selectedArray = selectedImages.slice(0);
  let n = selectedArray.indexOf(image);
  return n >= 0 ? selectedArray.splice(n, 1) && selectedArray : selectedArray.push(image) && selectedArray;
};

const buildImageObject = (image, i) => {
  image.tempId = i;
  image.uri = image.node.image.uri;
  image.isSelected = false;
  return image;
};

const unSelectAllImages = images =>
  images.map(image => {
    image.isSelected = false;
    return image;
  });
const checkIsSelected = (stateName, image, state) => {
  if (stateName === "images") {
    return checkImages(state.images, image);
  } else if (stateName === "selectedImages") {
    return checkSelectedImages(state.selectedImages, image);
  } else {
    console.log("error");
    return [];
  }
};

module.exports = { checkImages, checkSelectedImages, buildImageObject, unSelectAllImages, checkIsSelected };
