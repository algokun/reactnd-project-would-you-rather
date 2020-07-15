import { ADD_QUESTION, GET_QUESTIONS, VOTE_QUESTION } from "./action-constants";
import { _getQuestions } from "../../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

const fetchQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const getQuestions = () => {
  return function (dispatch) {
    dispatch(showLoading());
    _getQuestions().then((response) => {
      dispatch(fetchQuestions(response));
      dispatch(hideLoading());
    });
  };
};
