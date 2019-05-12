import {CameraRoll} from "react-native";


const buildImageObject = (image:object, i:number) => {
    // @ts-ignore
    image.tempId = i;
    // @ts-ignore
    image.uri = image.node.image.uri;
    // @ts-ignore
    image.isSelected = false;
    return image;
};
export const getCameraRollImages = async () => {
    const images = await CameraRoll.getPhotos({
        first: 5000,
        assetType: "Photos"
    });
    return images.edges.map(buildImageObject)
};