import React from "react";
import { Redirect  } from 'react-router-dom';

import {  useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from "../../forms";
import { submitFormLogics } from './logics/submitFormLogics';

const Registration = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const logged = useSelector(state => state.auth.loggedIn);

  const handleSubmitForm = async (values) => {
    try{
    await dispatch(submitFormLogics(values,'register'));
   
    } catch (err) {
      console.log(err);
    }
 

  };
  return (
    <div>
      <h1>Sign In</h1>
      <RegistrationForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      {logged ? <Redirect to='/' /> : <Redirect to='/Registration' /> }
    </div>
  );
};

export default Registration;
