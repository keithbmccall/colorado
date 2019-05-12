type Image = {
    node:{
        location:object,
        image: object,
        group_name:string,

    },
    tempId:number,
    uri:string,
    isSelected:boolean
}
type Images = Array<Image>;
const checkImages = (images:Images, image:Image) => {
    // toggles isSelected status/state on image
    let imagesArray = images.slice(0);
    imagesArray[image.tempId].isSelected = !imagesArray[image.tempId].isSelected;
    return imagesArray;
};
const checkSelectedImages = (selectedImages:Images, image:Image) => {
    // adds images to selectedImages array/state
    let selectedArray = selectedImages.slice(0);
    let n = selectedArray.indexOf(image);
    return n >= 0 ? selectedArray.splice(n, 1) && selectedArray : selectedArray.push(image) && selectedArray;
};

const unSelectAllImages = (images:Images) =>
    images.map(image => {
        image.isSelected = false;
        return image;
    });

const renderSelectedImageCount = (images:Images) => {
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
