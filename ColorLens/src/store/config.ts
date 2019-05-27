import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const initialState = {};

const middleware = [thunk];

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = ()=>createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

