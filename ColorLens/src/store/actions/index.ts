import {setFocusedImage} from "./studioActions";
import {fetchCameraImages, saveImagesToStudio} from './cameraRollActions'


export const cameraRollActions = {
    saveImagesToStudio,
    fetchCameraImages
}
export const studioActions = {
    // fetchStudioImages,
    // temporaryAddStudioImages,
    setFocusedImage
}