//evaluate actions
import {
    FETCH_STUDIO_IMAGES,
    SAVE_STUDIO_IMAGES,
    TEMP_ADD_STUDIO_IMAGES
} from "store/actions/actionTypes";

const initialState = {
    studioImages: []
};

export default (state = initialState, action) => {
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
            const tempState = {...state};
            tempState.studioImages = state.studioImages ?
                [...state.studioImages, ...action.payload] :
                [...action.payload]
            return tempState;
        default:
            return state;
    }
};
