import { createStructuredSelector } from "reselect";

export const NAME = "users";

// Action Types
const GET_USERS_LIST = "GET_USERS_LIST";
const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
const GET_USERS_LIST_FAILED = "GET_USERS_LIST_FAILED";
const ADD_USER = "ADD_USER";
const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
const ADD_USER_FAILED = "ADD_USER_FAILED";
const EDIT_USER = "EDIT_USER_SUCCESS";
const DELETE_USER = "DELETE_USER_SUCCESS";

function list() {
  return { type: GET_USERS_LIST };
}

function add(user) {
  return {
    type: ADD_USER,
    data: user,
  };
}

function edit(user) {
  return {
    type: EDIT_USER,
    data: user,
  };
}

function deleteUser(user) {
  return {
    type: DELETE_USER,
    data: user,
  };
}

const users = (state) => state[NAME];

export const selector = createStructuredSelector({
  users,
});

export const actionCreators = {
  list,
  add,
  edit,
  deleteUser,
};

export const actionTypes = {
  GET_USERS_LIST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAILED,
  //   LIST_TRY,
  //   LIST_FAILED,
  //   LIST_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  EDIT_USER,
  DELETE_USER,
};
