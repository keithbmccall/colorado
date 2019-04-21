import {
    FETCH_CAMERA_IMAGES,
    SAVE_CAMERA_IMAGE
} from "../actions/actionTypes";

const initialState = {
    cameraImages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMERA_IMAGES:
            return {
                ...state,
                cameraImages: action.payload
            };
        case SAVE_CAMERA_IMAGE:
            return {
                ...state,
                studioImages: action.payload
            };
        default:
            return state;
    }
};
