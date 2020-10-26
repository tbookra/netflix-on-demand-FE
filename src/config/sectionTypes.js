import * as pageTypes from '../actions/pageTypes';

export const sectionType = (section) => {
    switch (section) {
            case 'popular':
            return {
                sectionName: 'popular',
                sectionTitle: 'The Most Popular Movies',
                sectionUpType: pageTypes.POPULAR_PAGE_UP,
                sectionDownType: pageTypes.POPULAR_PAGE_DOWN,
                urlArr: 0,
                state: 'popularPage',
            };
            case 'top_rated':
                return {
                sectionName: 'top_rated',
                sectionTitle: 'The Top Rated Movies',
                sectionUpType: pageTypes.TOP_RATED_UP,
                sectionDownType: pageTypes.TOP_RATED_DOWN,
                urlArr: 1,
                state: 'top_ratedPage',
            };
            case 'trending':
                return {
                    sectionName: 'trending',
                    sectionTitle: 'The Most requested Movies',
                    sectionUpType: pageTypes.TRENDING_UP,
                    sectionDownType: pageTypes.TRENDING_DOWN,
                    urlArr: 2,
                    state: 'trendingPage',
                };
            case 'discover':
                return {
                    sectionName: 'discover',
                    sectionTitle: 'Netflix Original Productions',
                    sectionUpType: pageTypes.ORIGINALS_UP,
                    sectionDownType: pageTypes.ORIGINALS_DOWN,
                    urlArr: 3,
                    state: 'originalsPage',
                };
            case 'action':
                return {
                    sectionName: 'action',
                    sectionTitle: 'Action Movies',
                    sectionUpType: pageTypes.ACTION_UP,
                    sectionDownType: pageTypes.ACTION_DOWN,
                    urlArr: 4,
                    state: 'actionPage',
                };


            default:
                return{
                    sectionName: 'popular',
                    sectionTitle: 'The Most Popular Movies',
                    sectionUpType: pageTypes.POPULAR_PAGE_UP,
                    sectionDownType: pageTypes.POPULAR_PAGE_DOWN,
                    urlArr: 0,
                    state:  'popularPage',
                };
    }
}