import {getStudioImages} from 'helpers/device-storage'
import {ThunkDispatch} from "redux-thunk";
import {CommonImageType} from "../../types-store";

export const SET_FOCUSED_IMAGE = "SET_FOCUSED_IMAGE";
export const FETCH_STUDIO_IMAGES = "FETCH_STUDIO_IMAGES";
export const SAVE_STUDIO_IMAGES = "SAVE_STUDIO_IMAGES";
export const TEMP_ADD_STUDIO_IMAGES = "TEMP_ADD_STUDIO_IMAGES";

type Images = Array<CommonImageType>
type FetchStudioImageType = {
    type: typeof FETCH_STUDIO_IMAGES,
    payload: Images
}
type SaveStudioImageType = {
    type: typeof SAVE_STUDIO_IMAGES,
    payload: Images
}
type TempAddStudioImageType = {
    type: typeof TEMP_ADD_STUDIO_IMAGES,
    payload: Images
}
type SetFocusedImageType = {
    type: typeof SET_FOCUSED_IMAGE,
    payload: CommonImageType
}
export type NewImagesTypes = Images
export type StudioImageTypes = TempAddStudioImageType | SaveStudioImageType | FetchStudioImageType | SetFocusedImageType


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

export const setFocusedImage = (image: CommonImageType) => (dispatch: ThunkDispatch<{}, {}, any>) =>
    dispatch({
        type: SET_FOCUSED_IMAGE,
        payload: image
    })