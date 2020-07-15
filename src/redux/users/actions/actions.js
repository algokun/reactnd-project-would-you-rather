import { GET_USERS, LOG_IN, SIGN_OUT } from "./action_constants";
import { _getUsers } from "../../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const loginUser = (id) => {
  return {
    type: LOG_IN,
    authedUser: id,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getUsers = () => {
  return function (dispatch) {
    dispatch(showLoading());
    _getUsers().then((response) => {
      dispatch(fetchUsers(response));
      dispatch(hideLoading());
    });
  };
};
