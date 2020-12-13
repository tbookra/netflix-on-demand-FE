import React, { useEffect} from "react";
import { useHistory  } from 'react-router-dom';
import {httpRequest} from '../../api'
import {  useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {removeToken} from '../../api/tokenHandler';
import * as authTypes from '../../actions/authTypes';

const SignoutPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { loggedIn, userName} = useSelector(state => state.auth);
    

     useEffect(()=>{
    !loggedIn&&history.replace('/')
  }, [history, loggedIn])

  const handleSignout = async () => {
    try{
    const {data: {deleted}} = await httpRequest.get(`/auth/deleteUser/${userName.email}`);
    if (deleted) {
        removeToken();
        await dispatch({type:authTypes.SET_LOGOUT});
    }

  
    } catch (err) {
      console.log(err);
    }
   };

  
  return (
    <div>
      <h1>Signing Out</h1>
      <Button variant="contained" color="secondary" onClick={handleSignout}>
        Click Here to Sign Out
      </Button>
      
    </div>
  );
};

export default SignoutPage;