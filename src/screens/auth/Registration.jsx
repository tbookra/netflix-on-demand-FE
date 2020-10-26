import React, {useState, useEffect} from "react";
import { useHistory  } from 'react-router-dom';

import {  useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from "../../forms";
import { submitFormLogics } from '../../actions/authActions';

const Registration = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { loggedIn} = useSelector(state => state.auth);
    const [errorMessage, setErrorMessage] = useState('')

     useEffect(()=>{
    loggedIn&&history.replace('/')
  }, [history, loggedIn])

  const handleSubmitForm = async (values) => {
    try{
    const error = await dispatch(submitFormLogics(values,'register'))
    setErrorMessage(error)
   
    } catch (err) {
      console.log(err);
    }
 

  };
  return (
    <div>
      <h1>Sign In</h1>
      <RegistrationForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
    </div>
  );
};

export default Registration;
