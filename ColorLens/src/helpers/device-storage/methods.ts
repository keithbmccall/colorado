//these methods moved here to streamline the color extractions for better UI
//these are helper functions create in my rebuild of my Colorado Color Palettes application
// these methods are imported into my device storage component with purpose of saving data
// to the saved image objects as we save to AsyncStorage on ios
import {getAllSwatches} from "react-native-palette";
import rgb2hex from "rgb2hex";
import {CommonImageType} from "types-store";

type Swatch = {
    color: string,
    population: number
}
type Swatches = Array<Swatch>


// buildSwatchObj
const equalizeSwatchLength = (swatches: Swatches) => {
    if (swatches.length < 6) {
        let n = 6 - swatches.length;
        for (let i = 0; i < n; i++) {
            swatches.push(swatches[i]);
        }
    }
    return swatches;
};

const normalizeSwatches = (swatches: Swatches): Array<object> => {
    return equalizeSwatchLength(swatches)
        .sort((a, b) => b.population - a.population)
        .slice(0, 6)
        .map(swatch => (swatch.color = rgb2hex(swatch.color).hex) && swatch);
};

const buildImageObject = (allCurrentImages: Swatches, image: CommonImageType, i: number): object => {
    const count = i + 1;
    let imageObject: any = {};
    imageObject.groupName = image.node.group_name;
    imageObject.details = image.node.image;
    imageObject.location = image.node.location;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + count : count;
    return imageObject
};
const buildImageObjectWithSwatches = async (allCurrentImages: Swatches, image: CommonImageType, i: number): Promise<object> => {
    let imageObject: any = buildImageObject(allCurrentImages, image, i)
    await new Promise(
        (resolve, reject) =>
            getAllSwatches({quality: "medium"}, image.uri, (error: any, swatches: []) => {
                if (error) {
                    console.log("error in getDominantSwatches!: ", error);
                    reject(error)
                } else {
                    imageObject.palette = {
                        id: image.tempId,
                        swatches: normalizeSwatches(swatches),
                    };
                    resolve(imageObject.palette);
                }
            })
    );
    return imageObject
};
export const studioMethods = {buildImageObject, buildImageObjectWithSwatches};