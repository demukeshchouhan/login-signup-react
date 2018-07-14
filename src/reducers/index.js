import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import register from "./register";

export default combineReducers({
  user,
  auth,
  register
});
