import {FETCH_STUDIO_IMAGES, SAVE_STUDIO_IMAGES, TEMP_ADD_STUDIO_IMAGES} from "./actionTypes";
import {getStudioImages} from 'helpers/device-storage'
import {Dispatch} from "redux";
import {NewImagesTypes} from "./actionTypes";


export const fetchStudioImages = () => async (dispatch: Dispatch) => {
    const images = await getStudioImages();
    dispatch({
        type: FETCH_STUDIO_IMAGES,
        payload: images
    })
};
export const temporaryAddStudioImages = (newImages: NewImagesTypes) => (dispatch: Dispatch) =>
    dispatch({
        type: TEMP_ADD_STUDIO_IMAGES,
        payload: newImages
    });

