import { createStructuredSelector } from "reselect";

export const NAME = "users";

// Action Types
const LIST_TRY = "users/LIST_TRY";
const LIST_SUCCESS = "[users]/LIST_SUCCESS";
const LIST_FAILED = "[users]/LIST_FAILED";
const ADD_USER = "[users]/ADD_USER";
const EDIT_USER = "[users]/EDIT_USER";
const DELETE_USER = "[users]/DELETE_USER";

function list() {
    return { type: LIST_TRY };
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
    LIST_TRY,
    LIST_FAILED,
    LIST_SUCCESS,
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
  };