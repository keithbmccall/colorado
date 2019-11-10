//evaluate actions
import {
    FETCH_STUDIO_IMAGES,
    SAVE_STUDIO_IMAGES,
    StudioImageTypes,
    SET_FOCUSED_IMAGE
} from "store/actions/studioActions";

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
        //
        case SET_FOCUSED_IMAGE:
            return {
                ...state,
                focusedImage: action.payload
            };
        default:
            return state;
    }
};
