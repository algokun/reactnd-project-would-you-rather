import {
  ADD_QUESTION,
  GET_QUESTIONS,
  ADD_ANSWER,
} from "./actions/action-constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const { qid, authedUser, option } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [option]: {
            ...state[qid][option],
            votes: state[qid][option].votes.concat(authedUser),
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
