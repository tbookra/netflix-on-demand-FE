import * as authTypes from "./authTypes"; 
// import { httpRequest } from "../api";

export const setLogged = (isToken) => {
  
  return {
    type: authTypes.SET_LOGGED,
    payload: isToken,
  }
}

// const setUserToken = (token) => {
//   return {
//     type: authTypes.SET_TOKEN,
//     payload: token,
//   };
// };

// const setUserEmail = (email) => {
//   return {
//     type: authTypes.SET_EMAIL,
//     payload: email,
//   };
// };

export const setError = (error) => {
  return{
    type:authTypes.FETCH_ERROR,
    payload:error
  }
};


// const setTokenAuth = (values) => {
//   return (dispatch)=>{
//     dispatch({type:authTypes.FETCH_REQUEST})
//      const {data} = await httpRequest.post('auth/login', {values})
//       if(data.token){
//         dispatch({type:authTypes.FETCH_SUCCESS})
//         dispatch(setUserToken(data.token))
//       } 
//       if(data.error){
//          dispatch(setError(data.error))
//         dispatch(setError(data.error))
//       } 
//   }
// }