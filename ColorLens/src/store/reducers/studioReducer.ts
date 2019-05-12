//evaluate actions
import {
    FETCH_STUDIO_IMAGES,
    SAVE_STUDIO_IMAGES,
    StudioImageTypes,
    TEMP_ADD_STUDIO_IMAGES
} from "store/actions/actionTypes";
import {studioMethods} from 'helpers/device-storage'

const initialState = {
    studioImages: []
};

export default (state = initialState, action: StudioImageTypes) => {
    switch (action.type) {
        case FETCH_STUDIO_IMAGES:
            return {
                ...state,
                studioImages: action.payload
            };
        case SAVE_STUDIO_IMAGES:
            return {
                ...state,
                studioImages: action.payload
            };
        case TEMP_ADD_STUDIO_IMAGES:
            const tempState: any = {...state};
            tempState.studioImages = state.studioImages ?
                // @ts-ignore
                [...state.studioImages, ...action.payload.map(studioMethods.buildImageObject.bind(null, state.studioImages))] :
                // @ts-ignore
                [...action.payload.map(studioMethods.buildImageObject.bind(null, state.studioImages))];
            return tempState;
        default:
            return state;
    }
};