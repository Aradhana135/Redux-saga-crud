import { call, put } from "redux-saga/effects";
import axios from "axios";
import { actionTypes as userActions } from "../../redux/index";

export default function* tryUsersList() {
  try {
    const URL = "http://localhost:3000/users";
    const response = yield call(fetch, URL);
    const data = yield call([response, "json"]);

    yield put({ type: userActions.GET_USERS_LIST_SUCCESS, data });
  } catch (e) {
    yield put({ type: userActions.GET_USERS_LIST_FAILED });
  }
}

export function* addUser(user) {
  try {
    console.log("q", user.data);
    const URL = "http://localhost:3000/users";
    const res = axios.post(URL, user.data);

    // const response = yield call(fetch, URL, {
    //   method: "POST",
    //   body: user.data,
    // });
    // const data = yield call([response, "json"]);
    yield put({ type: userActions.ADD_USER_SUCCESS });
  } catch (e) {
    console.log("wwwwww");
  }
}

// export function* addUser(user) {
//   try {
//     console.log("q", user.data);
//     const URL = "http://localhost:3000/users";
//     const res = axios.post(URL, user.data);

//     yield put({ type: userActions.ADD_USER_SUCCESS });
//   } catch (e) {
//     console.log("wwwwww");
//   }
// }
