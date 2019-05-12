import {FETCH_CAMERA_IMAGES, SAVE_CAMERA_IMAGES} from "./actionTypes";
import {getCameraRollImages} from 'helpers/api'
import {Dispatch} from "redux";

export const fetchCameraImages = () => async (dispatch:Dispatch) => {
    const images = await getCameraRollImages();
    dispatch({
        type: FETCH_CAMERA_IMAGES,
        payload: images
    })
};

