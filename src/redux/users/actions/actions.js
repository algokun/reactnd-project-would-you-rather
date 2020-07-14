import { GET_USERS, LOG_IN, SIGN_OUT } from "./action_constants";
import { _getUsers } from "../../../utils/api";

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
    //TODO: Add loading ui here
    _getUsers().then((response) => {
      dispatch(fetchUsers(response));
    });
  };
};
