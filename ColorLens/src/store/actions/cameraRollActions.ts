import {getCameraRollImages} from 'helpers/api'
import {CommonImageType} from "types-store";
import {ThunkDispatch} from "redux-thunk";

export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";

type Images = Array<CommonImageType>
type FetchCameraImageType = {
    type: typeof FETCH_CAMERA_IMAGES,
    payload: Images
}
type SaveCameraImageType = {
    type: typeof SAVE_CAMERA_IMAGES,
    payload: Images
}

export type CameraImageTypes =
    SaveCameraImageType
    | FetchCameraImageType

export const fetchCameraImages = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const images = await getCameraRollImages();
    return dispatch({
        type: FETCH_CAMERA_IMAGES,
        payload: images
    })
};

export const saveImagesToStudio = (images: Array<CommonImageType>) => (dispatch: ThunkDispatch<{}, {}, any>) => {
    dispatch({
        type: SAVE_CAMERA_IMAGES,
        payload: images
    })
};
