import * as authTypes from "../actions/authTypes"; 
import { initialState } from "./initialState";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case authTypes.SET_LOGGED:
      return {
        ...state,
        loggedIn: action.payload, 
      };

    case authTypes.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true, 
      };

    case authTypes.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case authTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

         case authTypes.SET_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };

    case authTypes.FETCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
