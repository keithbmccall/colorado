import {CommonImageType} from "types-store";

type SelectedOrUnselectedImagesType = {
    images: Array<CommonImageType>,
    selectedImages: Array<CommonImageType>
}

export const unSelectAllImages = (images: Array<CommonImageType>): Array<CommonImageType> =>
    images.map(image => {
        image.isSelected = false;
        return image;
    });
export const renderSelectedImageCount = (images: Array<CommonImageType>): string => {
    const selectedImages = images.filter(image => image.isSelected);
    if (selectedImages.length === 0 || selectedImages.length === 1) {
        return `1 Image`
    } else {
        return `${selectedImages.length} Images`
    }
}
export const checkSelectedImages = (selectedImages: Array<CommonImageType>, image: CommonImageType): Array<CommonImageType> => {
    // adds images to selectedImages array/state
    let selectedArray = selectedImages.slice(0);
    let n = selectedArray.indexOf(image);
    // @ts-ignore
    return n >= 0 ?
        (selectedArray.splice(n, 1) && selectedArray) :
        selectedArray.push(image) && selectedArray;
};

export const selectOrUnselectImage = (images: Array<CommonImageType>, selectedImages: Array<CommonImageType>, image: CommonImageType): SelectedOrUnselectedImagesType => {
    let stateImages = images.slice(0);
    let newSelectedImages = [...selectedImages]
    const newImages = stateImages.map(stateImage => {
        if (stateImage.tempId === image.tempId) {
            stateImage.isSelected = !stateImage.isSelected;
            newSelectedImages = checkSelectedImages(newSelectedImages, stateImage)
        }
        return stateImage
    });
    return {
        images: newImages,
        selectedImages: newSelectedImages
    }
};