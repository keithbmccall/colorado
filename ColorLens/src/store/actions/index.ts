import {fetchStudioImages, temporaryAddStudioImages} from "./studioActions";
import {fetchCameraImages,selectCameraImage,unselectAllCameraImages} from './cameraRollActions'


export const cameraRollActions = {
    fetchCameraImages,
    selectCameraImage,
    unselectAllCameraImages
}
export const studioActions = {
    fetchStudioImages,
    temporaryAddStudioImages
}