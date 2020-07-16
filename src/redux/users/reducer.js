import {
  ADD_QUESTION_TO_USER,
  GET_USERS,
  ADD_VOTE_TO_USER,
} from "./actions/action_constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER:
      const { id, authUser } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          questions: state[authUser].questions.concat(id),
        },
      };
    case ADD_VOTE_TO_USER:
      const { qid, author, option } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          answers: {
            ...state[author].answers,
            [qid]: option,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
