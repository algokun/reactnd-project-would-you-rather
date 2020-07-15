import {
  GET_USERS,
  ADD_QUESTION_TO_USER,
  ADD_VOTE_TO_USER,
} from "./action_constants";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};
