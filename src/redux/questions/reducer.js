import {
  ADD_QUESTION,
  GET_QUESTIONS,
  VOTE_QUESTION,
} from "./actions/action-constants";

const initialState = {
  questions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    default:
      return state;
  }
};

export default reducer;
