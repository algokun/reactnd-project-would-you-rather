import { loadingBarReducer } from "react-redux-loading";
import users from "./users/reducer";
import questions from "./questions/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  loadingBar: loadingBarReducer,
  users,
  questions,
});
