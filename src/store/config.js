import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeMiddleware } from "./middleware";
import { createPersistStore } from "./persistor";

const initStore = () => {
  const initialState = {};

  const middleware = composeMiddleware();

  const { persistStore, persistedReducer } = createPersistStore(rootReducer);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return {
    persistStore,
    store: createStore(
      persistedReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware))
    )
  };
};

const { store, persistStore } = initStore();

const persistor = persistStore(store);

export { store, persistor };
