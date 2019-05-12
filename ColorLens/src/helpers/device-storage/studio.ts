import {AsyncStorage} from "react-native";
import {studioMethods} from "./methods";

const studio = "studio";

type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string
}
export const saveStudioImages = async (images: Array<Image>) => {
    const allImagesJSON: any = await AsyncStorage.getItem('studio', error => error && console.log("error getting studio images during save"));
    const allCurrentImages = JSON.parse(allImagesJSON);
    const newImages = await Promise.all(images.map(studioMethods.buildImageObjectWithSwatches.bind(null, allCurrentImages)));
    let imagesToSave = [];
    if (allImagesJSON) {
        if (allCurrentImages.length) {
            imagesToSave = [...allCurrentImages, ...newImages];
            AsyncStorage.setItem(studio, JSON.stringify(imagesToSave))
        } else {
            imagesToSave = newImages;
            AsyncStorage.setItem(studio, JSON.stringify(imagesToSave))
        }
    } else {
        imagesToSave = newImages;
        AsyncStorage.setItem(studio, JSON.stringify(imagesToSave))
    }
    // AsyncStorage.removeItem(studio)
};

export const getStudioImages = async () => {
    const images: any = await AsyncStorage.getItem(studio, error => error && console.log("error getting studio images"));
    return JSON.parse(images);
};

export const updateStudioImage = () => {

}