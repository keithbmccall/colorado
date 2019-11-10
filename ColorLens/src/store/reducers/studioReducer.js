//evaluate actions
import {
    SAVE_CAMERA_IMAGES,
    FETCH_STUDIO_IMAGES,
    SAVE_STUDIO_IMAGES,
    SET_FOCUSED_IMAGE
} from "store/actions/studioActions";

const initialState = {
    studioImages: [],
    focusedImage: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CAMERA_IMAGES:
            return {
                ...state,
                studioImages: action.payload
            };
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
