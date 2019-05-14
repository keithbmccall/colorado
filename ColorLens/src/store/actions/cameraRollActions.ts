import {CameraImageTypes, FETCH_CAMERA_IMAGES, SELECT_CAMERA_IMAGE, UNSELECT_ALL_CAMERA_IMAGES} from "./actionTypes";
import {getCameraRollImages} from 'helpers/api'
import {CommonImageType} from "types-store";
import {ThunkDispatch} from "redux-thunk";

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