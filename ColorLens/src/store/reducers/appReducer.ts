import {AppTypes, BEGIN_LOADING, END_LOADING} from "../actions/appActions";

const initialState = {
    isLoading: false
};

export default (state = initialState, action: AppTypes) => {
    switch (action.type) {
        case BEGIN_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case END_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
