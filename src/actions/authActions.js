import * as authTypes from "./authTypes"; 
import { httpRequest } from '../api';


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
          if (data.token) { 
            dispatch({type:authTypes.FETCH_SUCCESS}) 
            dispatch(setUserData(data))  
          }
        }catch(err){
          console.log(err)
        }
  
  }
 
  