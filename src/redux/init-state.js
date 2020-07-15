import { fetchUsers } from "./users/actions";
import { fetchQuestions } from "./questions/actions";
import { showLoading, hideLoading } from "react-redux-loading";
import { _getUsers, _getQuestions } from "../utils/api";

function getAllData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function getInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getAllData().then(({ users, questions }) => {
      dispatch(fetchQuestions(questions));
      dispatch(fetchUsers(users));
      dispatch(hideLoading());
    });
  };
}
