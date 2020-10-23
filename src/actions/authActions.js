import * as authTypes from "./authTypes"; 
import { httpRequest } from '../api';
import * as tokenHandler from '../api/tokenHandler'

 const setUserData = (userData) => {
  return{
    type:authTypes.SET_USER,
    payload:userData
  }
};

export const submitFormLogics =  (values, sentFrom) => async(dispatch) =>{
        try{          
          dispatch({type:authTypes.FETCH_REQUEST})
          const { data } = await httpRequest.post(`/auth/${sentFrom}`, values);
          console.log(data)
          if (data.error) return data.error;
          // if (data.token) { 
            dispatch({type:authTypes.FETCH_SUCCESS}) 
            dispatch(setUserData(data.userName))  
            tokenHandler.setToken(data.token)
          // }
        }catch(err){
          console.log(err)
        }
  
  }
 
  