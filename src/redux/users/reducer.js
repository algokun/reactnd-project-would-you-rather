import {
  ADD_QUESTION_TO_USER,
  GET_USERS,
  ADD_VOTE_TO_USER,
} from "./actions/action_constants";

const initialState = {
  users: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default reducer;
