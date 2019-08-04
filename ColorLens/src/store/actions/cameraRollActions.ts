import {getCameraRollImages} from 'helpers/api'
import {CommonImageType} from "types-store";
import {ThunkDispatch} from "redux-thunk";

export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";
export const SAVE_CAMERA_IMAGES = "SAVE_CAMERA_IMAGE";
export const SELECT_CAMERA_IMAGE = "SELECT_CAMERA_IMAGE";
export const UNSELECT_ALL_CAMERA_IMAGES = "UNSELECT_ALL_CAMERA_IMAGES";

type Images = Array<CommonImageType>
type FetchCameraImageType = {
    type: typeof FETCH_CAMERA_IMAGES,
    payload: Images
}
type SaveCameraImageType = {
    type: typeof SAVE_CAMERA_IMAGES,
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


export type CameraImageTypes = SaveCameraImageType | FetchCameraImageType | SelectCameraImageType | UnselectAllCameraImagesType

export const fetchCameraImages = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const images = await getCameraRollImages();
    dispatch({
        type: FETCH_CAMERA_IMAGES,
        payload: images
    })
};

export const selectCameraImage = (cameraRollImages: Array<CommonImageType>, selectedImage: CommonImageType) => (dispatch: ThunkDispatch<{}, {}, any>) => {
    // @ts-ignore
    let imagesArray: CameraImageTypes = cameraRollImages.slice(0);
    // @ts-ignore
    imagesArray[selectedImage.tempId].isSelected = !imagesArray[selectedImage.tempId].isSelected;
    dispatch({
        type: SELECT_CAMERA_IMAGE,
        payload: imagesArray
    })
}
export const unselectAllCameraImages = (cameraRollImages: Array<CommonImageType>) => (dispatch: ThunkDispatch<{}, {}, any>) => {
    const images = cameraRollImages.map((image: CommonImageType) => {
        image.isSelected = false;
        return image;
    });
    dispatch({
        type: UNSELECT_ALL_CAMERA_IMAGES,
        payload: images
    })
}