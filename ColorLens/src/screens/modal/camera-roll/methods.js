const checkPhotos = (photos, image) => {
  let photosArray = photos.slice(0);
  photosArray[image.tempId].isSelected = !photosArray[image.tempId].isSelected;
  return photosArray;
};
const checkSelectedImages = (selectedImages, image) => {
  let selectedArray = selectedImages.slice(0);
  let n = selectedArray.indexOf(image);
  return n >= 0
    ? selectedArray.splice(n, 1) && selectedArray
    : selectedArray.push(image) && selectedArray;
};

const buildPhotoObject = (photo, i) => {
  photo.tempId = i;
  photo.uri = photo.node.image.uri;
  photo.isSelected = false;
  return photo;
};

module.exports = { checkPhotos, checkSelectedImages, buildPhotoObject };
