import {CommonImageType} from "types-store";

export const FETCH_STUDIO_IMAGES = "FETCH_STUDIO_IMAGES";
export const SAVE_STUDIO_IMAGES = "SAVE_STUDIO_IMAGES";
//
export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";
export const SELECT_CAMERA_IMAGE = "SELECT_CAMERA_IMAGE";
export const UNSELECT_ALL_CAMERA_IMAGES = "UNSELECT_ALL_CAMERA_IMAGES";
//
export const TEMP_ADD_STUDIO_IMAGES = "TEMP_ADD_STUDIO_IMAGES";

type Images = Array<CommonImageType>
type FetchCameraImageType = {
    type: typeof FETCH_CAMERA_IMAGES,
    payload: Images
}
type SaveCameraImageType = {
    type: typeof SAVE_CAMERA_IMAGES,
    payload: Images
}
type FetchStudioImageType = {
    type: typeof FETCH_STUDIO_IMAGES,
    payload: Images
}
type SaveStudioImageType = {
    type: typeof SAVE_STUDIO_IMAGES,
    payload: Images
}
type TempAddStudioImageType = {
    type: typeof TEMP_ADD_STUDIO_IMAGES,
    payload: Images
}
type SelectCameraImageType = {
    type: typeof SELECT_CAMERA_IMAGE,
    payload: Images
}
type UnselectAllCameraImagesType ={
    type: typeof UNSELECT_ALL_CAMERA_IMAGES,
    payload: Images
}
export type NewImagesTypes = Images
export type CameraImageTypes = SaveCameraImageType | FetchCameraImageType | SelectCameraImageType | UnselectAllCameraImagesType
export type StudioImageTypes = TempAddStudioImageType | SaveStudioImageType | FetchStudioImageType