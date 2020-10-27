import * as pageTypes from "../actions/pageTypes"; 
import { initialState } from "./initialState";

const pageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case pageTypes.POPULAR_PAGE_UP:
        if(state.popularPage === 1000) { return {
            ...state,
          }
        } else {
        return {
            ...state,
            popularPage:  state.popularPage + 1,
            };  
          }
      case pageTypes.POPULAR_PAGE_DOWN:
          if(state.popularPage === 1) { return {
            ...state,
          }
        } else {
            return {
                ...state,
                popularPage:  state.popularPage - 1,
              };  
          }
       
        case pageTypes.TOP_RATED_UP:
            if(state.top_ratedPage === 1000) { return {
                ...state,
              }
            } else {
            return {
                ...state,
                top_ratedPage:  state.top_ratedPage + 1,
                };  
              }
        case pageTypes.TOP_RATED_DOWN:
            if(state.top_ratedPage === 1) { return {
                ...state,
              }
            } else {
                return {
                    ...state,
                    top_ratedPage:  state.top_ratedPage - 1,
                  };  
              }
        case pageTypes.TRENDING_UP:
            if(state.trendingPage === 1000) { return {
                ...state,
              }
            } else {
            return {
                ...state,
                trendingPage:  state.trendingPage + 1,
                };  
              }
        case pageTypes.TRENDING_DOWN:
            if(state.trendingPage === 1) { return {
                ...state,
              }
            } else {
                return {
                    ...state,
                    trendingPage:  state.trendingPage - 1,
                  };  
              }
        case pageTypes.ORIGINALS_UP:
            if(state.originalsPage === 1000) { return {
                ...state,
              }
            } else {
            return {
                ...state,
                originalsPage:  state.originalsPage + 1,
                };  
              }
        case pageTypes.ORIGINALS_DOWN:
            if(state.originalsPage === 1) { return {
                ...state,
              }
            } else {
                return {
                    ...state,
                    originalsPage:  state.originalsPage - 1,
                  };  
              }
        case pageTypes.ACTION_UP:
            if(state.actionPage === 1000) { return {
                ...state,
              }
            } else {
            return {
                ...state,
                actionPage:  state.actionPage + 1,
                };  
              }
        case pageTypes.ACTION_DOWN:
            if(state.actionPage === 1) { return {
                ...state,
              }
            } else {
                return {
                    ...state,
                    actionPage:  state.actionPage - 1,
                  };  
              }

            default:
            return state;
        }
};

export default pageReducer;
