import { GET_USERS, LOG_IN, SIGN_OUT } from "./actions/action_constants";

const initialState = {
  authedUser: null,
  users: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
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

export default reducer;
