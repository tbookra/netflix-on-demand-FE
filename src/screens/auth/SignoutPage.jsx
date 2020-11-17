import React, { useEffect} from "react";
import { useHistory  } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

const SignoutPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { loggedIn} = useSelector(state => state.auth);
    

     useEffect(()=>{
    !loggedIn&&history.replace('/')
  }, [history, loggedIn])

  const handleSubmit = async (values) => {
    try{
    
   
    } catch (err) {
      console.log(err);
    }
   };

  
  return (
    <div>
      <h1>Signing Out</h1>
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Click Here to Sign Out
      </Button>
      
    </div>
  );
};

export default SignoutPage;