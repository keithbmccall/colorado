import {fetchStudioImages, saveStudioImages,temporaryAddStudioImages} from "./studioActions";
import {fetchCameraImages} from './cameraRollActions'


export const cameraRollActions = {
    fetchCameraImages
}
export const studioActions = {
    fetchStudioImages,
    temporaryAddStudioImages
}