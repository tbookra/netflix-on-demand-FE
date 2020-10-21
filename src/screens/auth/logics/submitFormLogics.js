

import { httpRequest } from '../../../api';
import * as tokenHandler from '../../../api/tokenHandler';
import {setLogged, setError} from '../../../actions/authActions';



// console.log('submit form login')
export const submitFormLogics =  (values) => async(dispatch) =>{
        console.log('submot form inside return')
        try{
            const { data } = await httpRequest.post("/auth/login", values);
    console.log(data);
    if (data.error) dispatch(setError((data.error)));

    if (data.token) {
        console.log(3,data.token)
      tokenHandler.setToken(data.token);
    // const {user} = data
    dispatch(setLogged(true));
    
    }
        }catch(err){
          console.log(err)
        }
  
  }
 
  