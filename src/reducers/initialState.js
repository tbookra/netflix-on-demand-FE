export const initialState = {
  auth: {
    userName: null,
    isFetching: false,
    loggedIn: false, 
    changePassword: false,
   },
  notSavedAuth: {
    waiting_for_confirmaion: false,
    emailConfirmed: false,
  },
  mainApp: {
    currentMovie: {},
    movieFetchingError: null,
  }

};
