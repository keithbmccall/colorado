import {AsyncStorage} from "react-native";

const studio = "studio";
const buildImageObject = (allCurrentImages, image) => {
    const imageObject = image.node;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + 1 : 1;
    return imageObject
};

export const saveStudioImages = async images => {
    const allImagesJSON = await AsyncStorage.getItem('studio', error => error && console.log("error getting studio images during save"));
    const allCurrentImages = JSON.parse(allImagesJSON);
    const newImages = images.map(buildImageObject.bind(null, allCurrentImages));
    if (allImagesJSON) {
        allCurrentImages.length ?
            AsyncStorage.setItem(studio, JSON.stringify([...allCurrentImages, ...newImages,])) :
            AsyncStorage.setItem(studio, JSON.stringify([...newImages,]))
    } else {
        AsyncStorage.setItem(studio, JSON.stringify([...newImages,]))
    }
    // AsyncStorage.removeItem(studio)
}


export const getStudioImages = async () => {
    const images = await AsyncStorage.getItem(studio, error => error && console.log("error getting studio images"));
    return JSON.parse(images);
};
