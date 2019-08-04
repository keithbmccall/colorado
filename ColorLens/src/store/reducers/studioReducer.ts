//evaluate actions
import {
    FETCH_STUDIO_IMAGES,
    SAVE_STUDIO_IMAGES,
    StudioImageTypes,
    TEMP_ADD_STUDIO_IMAGES,
    SET_FOCUSED_IMAGE
} from "store/actions/studioActions";
import {studioMethods} from 'helpers/device-storage'

const initialState = {
    studioImages: [],
    focusedImage: null
};

export default (state = initialState, action: StudioImageTypes) => {
    switch (action.type) {
        case FETCH_STUDIO_IMAGES:
            return {
                ...state,
                studioImages: action.payload,
                focusedImage: action.payload[0]
            };
        case SAVE_STUDIO_IMAGES:
            return {
                ...state,
                studioImages: action.payload
            };
        case TEMP_ADD_STUDIO_IMAGES:
            const tempState: any = {...state};
            tempState.studioImages = state.studioImages ?
                [...state.studioImages, ...action.payload.map(studioMethods.buildImageObject.bind(null, state.studioImages))] :
                [...action.payload.map(studioMethods.buildImageObject.bind(null, state.studioImages))];
            return tempState;
        case SET_FOCUSED_IMAGE:
            return {
                ...state,
                focusedImage: action.payload
            }
        default:
            return state;
    }
};
