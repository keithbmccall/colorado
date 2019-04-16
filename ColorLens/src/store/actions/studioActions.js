import {FETCH_STUDIO_IMAGES, SAVE_STUDIO_IMAGES} from "./actionTypes";
import {getStudioImages} from 'helpers/device-storage'

export const fetchStudioImages = () => async dispatch => {
    const images = await getStudioImages();
    dispatch({
        type: FETCH_STUDIO_IMAGES,
        payload: images
    })
};

export const saveStudioImages = eventData => dispatch => {

};
