import * as authTypes from "./authTypes";
import { httpRequest } from "../api";

const setUserToken = (token) => {
  return {
    type: authTypes.SET_TOKEN,
    payload: token,
  };
};

const setUserEmail = (email) => {
  return {
    type: authTypes.SET_EMAIL,
    payload: email,
  };
};
