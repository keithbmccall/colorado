import {CameraImageTypes, FETCH_CAMERA_IMAGES, SAVE_CAMERA_IMAGES} from "store/actions/cameraRollActions";

const initialState = {
    cameraImages: []
};

export default (state = initialState, action:CameraImageTypes) => {
    switch (action.type) {
        case FETCH_CAMERA_IMAGES:
            return {
                ...state,
                cameraImages: action.payload
            };
        case SAVE_CAMERA_IMAGES:
            return {
                ...state,
                studioImages: action.payload
            };
        default:
            return state;
    }
};
