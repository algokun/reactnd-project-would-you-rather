import { LOG_IN, SIGN_OUT } from "./actions";

const initialState = {
  authedUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authedUser: action.authedUser,
      };
    case SIGN_OUT:
      return {
        ...state,
        authedUser: null,
      };

    default:
      return state;
  }
};

export default authReducer;
