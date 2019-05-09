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

const unSelectAllImages = images =>
    images.map(image => {
        image.isSelected = false;
        return image;
    });

const renderSelectedImageCount = images => {
    if (images.length === 0 || images.length === 1) {
        return `1 Image`
    } else {
        return `${images.length} Images`
    }
}
module.exports = {
    checkImages,
    checkSelectedImages,
    unSelectAllImages,
    renderSelectedImageCount
};
