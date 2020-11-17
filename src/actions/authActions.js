import * as authTypes from "./authTypes"; 
import { httpRequest } from '../api';
import {setToken} from '../api/tokenHandler'

export const setUserData = (userData) => {
  return{
    type:authTypes.SET_USER,
    payload:userData
  }
};
export const setConfirmedEmail = (confirmState) => {
  return{
    type: authTypes.EMAIL_CONFIRMED,
    payload: confirmState
  }
}

export const setWaitingForConfirm = (confirmedData) => {
  return{
    type: authTypes.WAIT_FOR_CONFIRMATION,
    payload: confirmedData
  }
}

export const submitFormLogics =  (values, sentFrom) => async(dispatch) =>{
        try{   
          dispatch({type:authTypes.FETCH_REQUEST})
          const { data } = await httpRequest.post(`/auth/${sentFrom}`, values);
          if (data.error){
            dispatch({type:authTypes.FETCH_ERROR})
            return data.error;
          } 
          if(sentFrom === 'register') {
            dispatch(setWaitingForConfirm(true))
          } else {
            dispatch({type:authTypes.FETCH_SUCCESS}) 
            dispatch(setUserData(data.userObj.full_name))  
            setToken(data.token) 
          }
          
        }catch(err){
          console.log(err)
        }
  
  }
 
  export const dispatchConfimation = () => async(dispatch) => {
    const { data } = await httpRequest.get(`/auth/confirmed`);
            dispatch({type:authTypes.FETCH_SUCCESS}) 
            dispatch(setUserData(data.userObj.full_name))  
            setToken(data.token)
            dispatch(setConfirmedEmail(true));
  }