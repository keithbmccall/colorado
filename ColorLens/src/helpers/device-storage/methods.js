//these methods moved here to streamline the color extractions for better UI
import {getAllSwatches} from "react-native-palette";
import rgb2hex from "rgb2hex";

// buildSwatchObj
const equalizeSwatchLength = swatches => {
    if (swatches.length < 6) {
        let n = 6 - swatches.length;
        for (let i = 0; i < n; i++) {
            swatches.push(swatches[i]);
        }
    }
    return swatches;
};
const normalizeSwatches = swatches => {
    swatches = equalizeSwatchLength(swatches);
    //
    return swatches
        .sort((a, b) => b.population - a.population)
        .slice(0, 6)
        .map(swatch => (swatch.color = rgb2hex(swatch.color).hex) && swatch);
};

const buildImageObject = (allCurrentImages, image, i) => {
    const count = i + 1;
    let imageObject = {};
    imageObject.groupName = image.node.group_name;
    imageObject.details = image.node.image;
    imageObject.location = image.node.location;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + count : count;
    return imageObject
};
const buildImageObjectWithSwatches = async (allCurrentImages, image, i) => {
    const count = i + 1;
    let imageObject = {};
    imageObject.groupName = image.node.group_name;
    imageObject.details = image.node.image;
    imageObject.location = image.node.location;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + count : count;
    // imageObject.palette = swatches.palette;
    await new Promise(
        (resolve, reject) => {
            getAllSwatches({quality: "medium"}, image.uri, (error, swatches) => {
                if (error) {
                    console.log("error in getDominantSwatches!: ", error);
                    reject(error)
                } else {
                    let colors = {};
                    colors.swatches = normalizeSwatches(swatches);
                    colors.id = image.tempId;
                    imageObject.palette = colors;
                    resolve(imageObject.palette);
                }
            });
        }
    );
    return imageObject
};
export const studioMethods = {buildImageObject, buildImageObjectWithSwatches};