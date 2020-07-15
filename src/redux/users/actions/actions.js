import {
  GET_USERS,
  ADD_QUESTION_TO_USER,
  ADD_VOTE_TO_USER,
} from "./action_constants";

import { addAnswerToQuestion } from "../../questions/actions";
import { _saveQuestionAnswer } from "../../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const addQuestionToUser = (id, authUser) => {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    authUser,
  };
};

const addAnswerToUser = (qid, author, option) => {
  return {
    type: ADD_VOTE_TO_USER,
    qid,
    author,
    option,
  };
};

export function handleSaveQuestionAnswer(authUser, qid, option) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(addAnswerToUser(qid, authUser, option));
    dispatch(addAnswerToQuestion(qid, authUser, option));

    return _saveQuestionAnswer({ authedUser: authUser, qid, answer: option })
      .then(() => {
        dispatch(hideLoading());
        alert("Task Completed Successfully");
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };
}
