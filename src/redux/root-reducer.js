import { loadingBarReducer } from "react-redux-loading";
import users from "./users/reducer";
import questions from "./questions/reducer";
import auth from "./auth/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  loadingBar: loadingBarReducer,
  users,
  questions,
  auth,
});
