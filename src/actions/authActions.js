import * as authTypes from "./authTypes"; 
import { httpRequest } from '../api';
import * as tokenHandler from '../api/tokenHandler';

export const setLogged = (isToken) => {
  
  return {
    type: authTypes.SET_LOGGED,
    payload: isToken,
  }
}

export const setError = (error) => {
  return{
    type:authTypes.FETCH_ERROR,
    payload:error
  }
};

export const submitFormLogics =  (values, sentFrom) => async(dispatch) =>{
        try{
            const { data } = await httpRequest.post(`/auth/${sentFrom}`, values);
            if (data.error) dispatch(setError((data.error)));
            if (data.token) {  
              dispatch({type:authTypes.FETCH_SUCCESS})    
              tokenHandler.setToken(data.token);
              dispatch(setLogged(data.user));
    }
        }catch(err){
          console.log(err)
        }
  
  }
 
  