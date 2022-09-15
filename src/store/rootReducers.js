import { combineReducers } from "redux";
import usersReducer, { NAME as usersName } from "../redux/index";

export default () =>
  combineReducers({
    [usersName]: usersReducer,
  });
