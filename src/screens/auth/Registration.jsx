import React, {useState} from "react";
import { Redirect  } from 'react-router-dom';

import {  useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from "../../forms";
import { submitFormLogics } from './logics/submitFormLogics';

const Registration = () => {
    const dispatch = useDispatch();
  const { loggedIn} = useSelector(state => state.auth);
  const [errorMessage, setErrorMessage] = useState('')
  // const logged = useSelector(state => state.auth.loggedIn);

  const handleSubmitForm = async (values) => {
    try{
    const error = await dispatch(submitFormLogics(values,'register'));
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
      {loggedIn ? <Redirect to='/' /> : <Redirect to='/Registration' /> }
    </div>
  );
};

export default Registration;
