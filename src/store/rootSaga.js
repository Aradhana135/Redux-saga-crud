import { takeLatest } from "redux-saga/effects";
import { actionTypes as usersActions } from "../redux/users/actions";

import {tryUsersList} from "../redux/users/saga";
import { addUser } from "../redux/users/saga";
import { editUser,deleteUser } from "../redux/users/saga";
export default function* rootSaga() {
  yield takeLatest(usersActions.GET_USERS_LIST, tryUsersList);
  yield takeLatest(usersActions.ADD_USER, addUser);
  yield takeLatest(usersActions.EDIT_USER, editUser);
  yield takeLatest(usersActions.DELETE_USER, deleteUser);
}
