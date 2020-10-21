import React from "react";
import {  useHistory  } from 'react-router-dom';

import {  useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from "../../forms";
import { submitFormLogics } from './logics/submitFormLogics';

const Registration = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const history = useHistory();

  const handleSubmitForm = async (values) => {
    try{
    await dispatch(submitFormLogics(values,'register'));
    history.push('/');
     console.log(0)
    } catch (err) {
      console.log(err);
    }
  // const handleSubmitForm = async (values) => {
  //   console.log(values);
  //   try {
  //     const { data } = await httpRequest.post("/auth/register", values);
  //     if (data.error) return setErrorMessage(data.error);
  //     if (data.token) tokenHandler.setToken(data.token);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }

//     try{
//       const { data } = await httpRequest.post(`/auth/${log}`, values);
//       if (data.error) dispatch(setError((data.error)));

//       if (data.token) tokenHandler.setToken(data.token);
//       dispatch(setLogged(data.user));

// }

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
