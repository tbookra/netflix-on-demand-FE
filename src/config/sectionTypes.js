export const sectionType = (section) => {
  try {
    switch (section) {
      case "popular":
        return {
          sectionName: "popular",
          sectionTitle: "The Most Popular Movies",
          urlArr: 0,
          state: "popularPage",
        };
      case "top_rated":
        return {
          sectionName: "top_rated",
          sectionTitle: "The Top Rated Movies",
          urlArr: 1,
          state: "top_ratedPage",
        };
      case "trending":
        return {
          sectionName: "trending",
          sectionTitle: "The Most requested Movies",
          urlArr: 2,
          state: "trendingPage",
        };
      case "discover":
        return {
          sectionName: "discover",
          sectionTitle: "Netflix Original Productions",
          urlArr: 3,
          state: "originalsPage",
        };
      case "action":
        return {
          sectionName: "action",
          sectionTitle: "Action Movies",
          urlArr: 4,
          state: "actionPage",
        };

      default:
        return {
          sectionName: "popular",
          sectionTitle: "The Most Popular Movies",
          urlArr: 0,
          state: "popularPage",
        };
    }
  } catch (e) {
    console.log(e);
  }
};
