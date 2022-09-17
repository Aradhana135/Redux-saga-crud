import { takeLatest } from "redux-saga/effects";
import { actionTypes as usersActions } from "../redux/index";

import tryUsersList from "../redux/users/saga";
import { addUser } from "../redux/users/saga";

export default function* rootSaga() {
  yield takeLatest(usersActions.GET_USERS_LIST, tryUsersList);
  yield takeLatest(usersActions.ADD_USER, addUser);
  // yield takeLatest('TRY_LIST', tryUsersList);
  // yield takeLatest('TRY_LIST', tryUsersList);
  // yield takeLatest('TRY_LIST', tryUsersList);
}
