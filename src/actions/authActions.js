import * as authTypes from "./authTypes"; 
import { httpRequest } from '../api';
import {setToken} from '../api/tokenHandler'

 const setUserData = (userData) => {
  return{
    type:authTypes.SET_USER,
    payload:userData
  }
};
export const setChangePassword = (change) => {
  return{
    type:authTypes.CHANGE_PASSWORD,
    payload:change
  }
};

export const submitFormLogics =  (values, sentFrom) => async(dispatch) =>{
        try{   
          dispatch({type:authTypes.FETCH_REQUEST})
          const { data } = await httpRequest.post(`/auth/${sentFrom}`, values);
          if (data.error){
            dispatch({type:authTypes.FETCH_ERROR})
            return data.error;
          } 
            dispatch({type:authTypes.FETCH_SUCCESS}) 
            dispatch(setUserData(data.userName))  
            setToken(data.token)
        }catch(err){
          console.log(err)
        }
  
  }
 
  