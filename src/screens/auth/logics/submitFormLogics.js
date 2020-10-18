

import { httpRequest } from '../../../api';
import * as tokenHandler from '../../../api/tokenHandler';
import {setLogged, setError} from '../../../actions/authActions';




export const submitFormLogics =  (values) => {
    console.log(11)
    return async (values,dispatch) =>{
        
    const { data } = await httpRequest.post("/auth/login", values);
    console.log(data);
    if (data.error) dispatch(setError((data.error)));

    if (data.token) {
        console.log(3,data.token)
      tokenHandler.setToken(data.token);
    const {user} = data
    dispatch(setLogged(user));
    
    }
  }
 };
  