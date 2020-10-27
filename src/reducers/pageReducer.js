import * as pageTypes from "../actions/pageTypes"; 
import { initialState } from "./initialState";

const pageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case pageTypes.POPULAR_PAGE_UP:
      return {
        ...state,
        popularPage: state.popularPage + 1, 
      };
      case pageTypes.POPULAR_PAGE_DOWN:
        return {
          ...state,
          popularPage:  state.popularPage - 1,
        };
        case pageTypes.TOP_RATED_UP:
            return {
            ...state,
            top_ratedPage: state.top_ratedPage + 1, 
        };
        case pageTypes.TOP_RATED_DOWN:
            return {
            ...state,
            top_ratedPage: state.top_ratedPage - 1,
            };
        case pageTypes.TRENDING_UP:
        return {
            ...state,
            trendingPage: state.trendingPage + 1, 
        };
        case pageTypes.TRENDING_DOWN:
            return {
            ...state,
            trendingPage: state.trendingPage - 1,
            };
        case pageTypes.ORIGINALS_UP:
        return {
            ...state,
            originalsPage: state.originalsPage + 1, 
        };
        case pageTypes.ORIGINALS_DOWN:
            return {
            ...state,
            originalsPage: state.originalsPage - 1,
            };
        case pageTypes.ACTION_UP:
            return {
            ...state,
            actionPage: state.actionPage + 1, 
        };
        case pageTypes.ACTION_DOWN:
            return {
            ...state,
            actionPage: state.actionPage - 1,
            };
        case pageTypes.PAGES_RESET:
            return {
            ...state,
            popularPage: 1,
            top_ratedPage: 1,
            trendingPage: 1,
            originalsPage: 1,
            actionPage: 1,
            };

            default:
            return state;
        }
};

export default pageReducer;
