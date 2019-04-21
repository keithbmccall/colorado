import {CameraRoll} from "react-native";

const buildImageObject = (image, i) => {
    image.tempId = i;
    image.uri = image.node.image.uri;
    image.isSelected = false;
    return image;
};
export const getCameraRollImages = async () => {
    const images = await CameraRoll.getPhotos({
        first: 20,
        assetType: "Photos"
    })
    return images.edges.map(buildImageObject)

}