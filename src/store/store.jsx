
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "../actions/auth";

export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
};