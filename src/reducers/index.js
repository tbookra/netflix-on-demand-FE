import { combineReducers } from "redux";
import authReducer from "./authReducer";
import noSavedAuthReducers from './noSavedAuthReducers';
import mainAppReducer from "./mainAppReducer";

export default combineReducers({ auth: authReducer, mainApp: mainAppReducer,notSavedAuth: noSavedAuthReducers});
