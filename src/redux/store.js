import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "./root-reducer";

const middleWare = applyMiddleware(thunk, logger);

const store = createStore(RootReducer, middleWare);

export default store;
