import { createStore, applyMiddleware, Middleware } from "redux";
import { postsReducer } from "../reducers/listReducer";
import { thunk } from "redux-thunk";

// Define middleware array with explicit typing
const middlewares: Middleware[] = [thunk];

// Apply middlewares
const enhancer = applyMiddleware(...middlewares);

// Create store
const store = createStore(postsReducer, enhancer);

export default store;