import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import {persistStore, persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const initialState = {};

const middleware = [thunk];

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ['app'],
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = () => createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export const store = initStore();
export const persistor = persistStore(store);