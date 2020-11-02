import * as authTypes from "../actions/authTypes"; 
import { initialState } from "./initialState";

const mainAppReducer = (state = initialState.mainApp, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainAppReducer;
