import { LOG_IN, SIGN_OUT } from "./actions";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      const { authedUser } = action;
      return authedUser;
    case SIGN_OUT:
      return null;

    default:
      return state;
  }
};

export default authReducer;
