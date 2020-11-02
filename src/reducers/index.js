import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mainAppReducer from "./mainAppReducer";

export default combineReducers({ auth: authReducer, mainApp: mainAppReducer });
