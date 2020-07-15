import { ADD_ANSWER, GET_QUESTIONS, ADD_QUESTION } from "./action-constants";

export const fetchQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};
