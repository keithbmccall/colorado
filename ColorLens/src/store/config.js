import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const initialState = {};

const middleware = [thunk];

export const initStore = ()=>createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

