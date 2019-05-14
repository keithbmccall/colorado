import {CommonImageType} from "types-store";

const checkImages = (images: Array<CommonImageType>, image: CommonImageType): Array<CommonImageType> => {
    // toggles isSelected status/state on image
    let imagesArray = images.slice(0);
    imagesArray[image.tempId].isSelected = !imagesArray[image.tempId].isSelected;
    return imagesArray;
};
const checkSelectedImages = (selectedImages: Array<CommonImageType>, image: CommonImageType): Array<CommonImageType> => {
    // adds images to selectedImages array/state
    let selectedArray = selectedImages.slice(0);
    let n = selectedArray.indexOf(image);
    // @ts-ignore
    return n >= 0 ? (selectedArray.splice(n, 1) && selectedArray) : selectedArray.push(image) && selectedArray;
};

const unSelectAllImages = (images: Array<CommonImageType>): Array<CommonImageType> =>
    images.map(image => {
        image.isSelected = false;
        return image;
    });

const renderSelectedImageCount = (images: Array<CommonImageType>): string => {
    if (images.length === 0 || images.length === 1) {
        return `1 Image`
    } else {
        return `${images.length} Images`
    }
}
export {
    checkImages,
    checkSelectedImages,
    unSelectAllImages,
    renderSelectedImageCount
};
