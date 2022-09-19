import { combineReducers } from "redux";
// import usersReducer, { NAME as usersName } from "../redux/index";
import usersReducer from "../redux/users/reducer";

import { NAME as usersName } from "../redux/users/actions";
export default () =>
  combineReducers({
    [usersName]: usersReducer,
  });
