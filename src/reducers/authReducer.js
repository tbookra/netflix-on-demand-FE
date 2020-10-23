import * as authTypes from "../actions/authTypes"; 
import { initialState } from "./initialState";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
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
         case authTypes.FETCH_ERROR:
      return {
        ...state,
           isFetching: false,
      };

    case authTypes.SET_USER:
      return {
        ...state,
        userName: action.payload,
        loggedIn: true,
      };

         case authTypes.SET_LOGOUT:
      return {
        ...state,
        loggedIn: false, 
      };

    default:
      return state;
  }
};

export default authReducer;
