import {FETCH_STUDIO_IMAGES, SAVE_STUDIO_IMAGES, TEMP_ADD_STUDIO_IMAGES, SET_FOCUSED_IMAGE} from "./actionTypes";
import {getStudioImages} from 'helpers/device-storage'
import {NewImagesTypes} from "./actionTypes";
import {ThunkDispatch} from "redux-thunk";
import {CommonImageType} from "../../types-store";


export const fetchStudioImages = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const images = await getStudioImages();
    dispatch({
        type: FETCH_STUDIO_IMAGES,
        payload: images
    })
};
export const temporaryAddStudioImages = (newImages: NewImagesTypes) => (dispatch: ThunkDispatch<{}, {}, any>) =>
    dispatch({
        type: TEMP_ADD_STUDIO_IMAGES,
        payload: newImages
    });

export const setFocusedImage = (image:CommonImageType) =>  (dispatch: ThunkDispatch<{}, {}, any>)=>
    dispatch({
        type: SET_FOCUSED_IMAGE,
        payload:image
    })