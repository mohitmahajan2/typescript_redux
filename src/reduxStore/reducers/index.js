import { combineReducers } from "redux";
import { authStore } from "./authReducers";

export default combineReducers({
  login: authStore,
});
