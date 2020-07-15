import { LOG_IN, SIGN_OUT } from "./actions-constants";

export const loginUser = (id) => {
  return {
    type: LOG_IN,
    authedUser: id,
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT,
  };
};
