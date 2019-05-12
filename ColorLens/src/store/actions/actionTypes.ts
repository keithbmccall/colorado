export const FETCH_STUDIO_IMAGES = "FETCH_STUDIO_IMAGES";
export const SAVE_STUDIO_IMAGES = "SAVE_STUDIO_IMAGES";
//
export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";
export const TEMP_ADD_STUDIO_IMAGES = "TEMP_ADD_STUDIO_IMAGES";

type Image = {
    node: {
        location: object,
        image: object,
        group_name: string,

    },
    tempId: number,
    uri: string
}
type Images = Array<Image>
type FetchCameraImageType = {
    type: typeof FETCH_CAMERA_IMAGES,
    payload: Array<object>
}
type SaveCameraImageType = {
    type: typeof SAVE_CAMERA_IMAGES,
    payload: Array<object>
}
type FetchStudioImageType = {
    type: typeof FETCH_STUDIO_IMAGES,
    payload: Array<object>
}
type SaveStudioImageType = {
    type: typeof SAVE_STUDIO_IMAGES,
    payload: Array<object>
}
type TempAddStudioImageType = {
    type: typeof TEMP_ADD_STUDIO_IMAGES,
    payload: Array<object>
}
export type NewImagesTypes = Images
export type CameraImageTypes = SaveCameraImageType | FetchCameraImageType
export type StudioImageTypes = TempAddStudioImageType | SaveStudioImageType | FetchStudioImageType