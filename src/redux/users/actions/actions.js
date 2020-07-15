import {
  GET_USERS,
  ADD_QUESTION_TO_USER,
  ADD_VOTE_TO_USER,
} from "./action_constants";

import { addAnswerToQuestion } from "../../questions/actions";
import { _saveQuestionAnswer } from "../../../utils/api";

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
    dispatch(addAnswerToUser(authUser, qid, option));
    dispatch(addAnswerToQuestion(authUser, qid, option));

    return _saveQuestionAnswer(authUser, qid, option).catch((e) => {
      alert("Something went wrong");
    });
  };
}
