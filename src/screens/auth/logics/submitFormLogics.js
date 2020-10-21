

import { httpRequest } from '../../../api';
import * as tokenHandler from '../../../api/tokenHandler';
import {setLogged, setError} from '../../../actions/authActions';



export const submitFormLogics =  (values, log) => async(dispatch) =>{
        try{
            const { data } = await httpRequest.post(`/auth/${log}`, values);
            if (data.error) dispatch(setError((data.error)));
console.log('after error');
            if (data.token) {
                console.log(3,data.token)
              tokenHandler.setToken(data.token);
            dispatch(setLogged(data.user));
            console.log('after setLogged');

    }
        }catch(err){
          console.log(err)
        }
  
  }
 
  