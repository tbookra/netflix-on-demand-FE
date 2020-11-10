export const initialState = { 
  auth: {
    userName: null,
    isFetching: false,
    loggedIn: false, 
    changePassword: false,
  },
  mainApp:{
    currentMovie:{},
    movieFetchingError:null
  }
 
};
