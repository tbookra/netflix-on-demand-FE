import * as authTypes from "../actions/authTypes";
import { initialState } from "./initialState";

const noSavedAuthReducers = (state = initialState.notSavedAuth, action) => {
  switch (action.type) {
    case authTypes.WAIT_FOR_CONFIRMATION:
      return {
        ...state,
        waiting_for_confirmaion: action.payload,
      };
    case authTypes.EMAIL_CONFIRMED:
      return {
        ...state,
        emailConfirmed: action.payload,
      };

    default:
      return state;
  }
};

export default noSavedAuthReducers;
