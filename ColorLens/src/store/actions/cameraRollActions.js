import {getCameraRollImages} from 'helpers/api'
import {ThunkDispatch} from "redux-thunk";

export const FETCH_CAMERA_IMAGES = "FETCH_CAMERA_IMAGES";

export const fetchCameraImages = () => async (dispatch) => {
    const images = await getCameraRollImages();
    return dispatch({
        type: FETCH_CAMERA_IMAGES,
        payload: images
    })
};


