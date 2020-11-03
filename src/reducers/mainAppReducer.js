import * as appTypes from "../actions/appTypes"; 
import { initialState } from "./initialState";

const mainAppReducer = (state = initialState.mainApp, action) => {
  switch (action.type) {
    case  appTypes.INSERT_MOVIE:
        return{
            ...state,
            currentMovie:action.payload,
            movieFetchingError:null
        };
  
    case  appTypes.CLEAN_STATE:
        return{
            ...state,
            currentMovie:{},
            movieFetchingError:null
        };

          case  appTypes.MOVIE_FETCH_ERROR:
        return{
            ...state,
            currentMovie:{},
            movieFetchingError:action.payload
        };
        case appTypes.DARK_MODE:
            return{
                ...state,
                darkMode:action.payload
            }
      
    default:
        return state;
  }
};

export default mainAppReducer;
