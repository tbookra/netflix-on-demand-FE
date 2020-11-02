import * as appTypes from "../actions/appTypes"; 
import { initialState } from "./initialState";

const mainAppReducer = (state = initialState.mainApp, action) => {
  switch (action.type) {
    case  appTypes.INSERT_MOVIE:
        return{
            ...state,
            currentMovie:action.payload
        };
    default:
        return state;
  }
};

export default mainAppReducer;
