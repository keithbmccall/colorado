import {FETCH_CAMERA_IMAGES, SAVE_CAMERA_IMAGE} from "./actionTypes";
import {getCameraRollImages} from 'helpers/api'

export const fetchCameraImages = () => async dispatch => {
    const images = await getCameraRollImages();
    dispatch({
        type: FETCH_CAMERA_IMAGES,
        payload: images
    })
};

