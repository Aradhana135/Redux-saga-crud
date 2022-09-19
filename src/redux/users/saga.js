import { call, put, } from "redux-saga/effects";
import axios from "axios";
// import { actionTypes as userActions } from "../../redux/index";
// import reducer from '../users/reducer';
import { actionTypes as userActions } from "./actions";
export  function* tryUsersList() {
  try {
    const URL = "http://localhost:3000/users";
    const response = yield call(fetch, URL);
    const data = yield call([response, "json"]);
  
    yield put({ type: userActions.GET_USERS_LIST_SUCCESS, data });
  } catch (e) {
    yield put({ type: userActions.GET_USERS_LIST_FAILED });
  }
}

export function* addUser(user) {yield
  try {
    console.log("details", user.data);
    console.log("id", user.data.id);
    const URL = "http://localhost:3000/users";
    const res = axios.post(URL, user.data);
    console.log("response",res)
    yield put({ type: userActions.ADD_USER_SUCCESS });
  } catch (e) {
    yield put({ type: userActions.ADD_USER_FAILED });
  }
}

export function* editUser(action) {yield
  try {
     console.log("editUser id", action );
    const URL =  `http://localhost:3000/users/${action.data.id}`;
    const res = axios.put(URL, action.data);
    console.log("response", res);
    yield put({ type: userActions.EDIT_USER_SUCCESS });
  } catch (e) {
    yield put({ type: userActions.EDIT_USER_FAILED});
  }
}

export function* deleteUser(user) {yield
  try {
    console.log("id", user.id);
    const URL =  `http://localhost:3000/users/${user.data.id}`;
    const res = axios.delete(URL, user.data);
    console.log("response",res)
    yield put({ type: userActions.DELETE_USER_SUCCESS });
  } catch (e) {
    yield put({ type: userActions.DELETE_USER_FAILED});
  }
}



