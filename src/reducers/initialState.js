export const initialState = {
  auth: {
    userName: null,
    isFetching: false,
    loggedIn: false, 
    changePassword: false,
    waiting_for_confirmaion: false,
    emailConfirmed: false,
  },
  mainApp: {
    currentMovie: {},
    movieFetchingError: null,
  }

};
