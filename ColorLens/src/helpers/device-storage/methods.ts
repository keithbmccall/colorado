//these methods moved here to streamline the color extractions for better UI
import {getAllSwatches} from "react-native-palette";
import rgb2hex from "rgb2hex";

type Swatch = {
    color: string,
    population: number
}
type Swatches = Array<Swatch>
type Image = {
    node:{
        location:object,
        image: object,
        group_name:string,

    },
    tempId:number,
    uri:string
}

// buildSwatchObj
const equalizeSwatchLength = (swatches:Swatches) => {
    if (swatches.length < 6) {
        let n = 6 - swatches.length;
        for (let i = 0; i < n; i++) {
            swatches.push(swatches[i]);
        }
    }
    return swatches;
};

const normalizeSwatches = (swatches:Swatches) => {
    swatches = equalizeSwatchLength(swatches);
    //
    return swatches
        .sort((a, b) => b.population - a.population)
        .slice(0, 6)
        .map(swatch => (swatch.color = rgb2hex(swatch.color).hex) && swatch);
};

const buildImageObject = (allCurrentImages:Swatches, image:Image, i:number) => {
    const count = i + 1;
    let imageObject:any = {};
    imageObject.groupName = image.node.group_name;
    imageObject.details = image.node.image;
    imageObject.location = image.node.location;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + count : count;
    return imageObject
};
const buildImageObjectWithSwatches = async (allCurrentImages:Swatches, image:Image, i:number) => {
    const count = i + 1;
    let imageObject:any = {};
    imageObject.groupName = image.node.group_name;
    imageObject.details = image.node.image;
    imageObject.location = image.node.location;
    imageObject.uri = image.uri;
    imageObject.id = allCurrentImages ? allCurrentImages.length + count : count;
    await new Promise(
        (resolve, reject) =>
            getAllSwatches({quality: "medium"}, image.uri, (error:any, swatches:[]) => {
                if (error) {
                    console.log("error in getDominantSwatches!: ", error);
                    reject(error)
                } else {
                    let colors:any = {};
                    colors.swatches = normalizeSwatches(swatches);
                    colors.id = image.tempId;
                    imageObject.palette = colors;
                    resolve(imageObject.palette);
                }
            })
    );
    return imageObject
};
export const studioMethods = {buildImageObject, buildImageObjectWithSwatches};