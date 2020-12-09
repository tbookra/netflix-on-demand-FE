import React, {useState, useEffect} from "react";
import { useHistory  } from 'react-router-dom';

import {  useSelector, useDispatch } from 'react-redux';
import { RegistrationForm } from "../../forms";
import { submitFormLogics } from '../../actions/authActions';

const Registration = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState('')
    const {waiting_for_confirmaion}= useSelector(state => state.notSavedAuth);

     useEffect(()=>{
    waiting_for_confirmaion&&history.replace('/ConfirmPleasePage')
  }, [history, waiting_for_confirmaion])

  const handleSubmitForm = async (values) => {
    try{
    localStorage.removeItem("email");
    const error = await dispatch(submitFormLogics(values,'register'))
    setErrorMessage(error)
    localStorage.setItem("email", values.email);
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
