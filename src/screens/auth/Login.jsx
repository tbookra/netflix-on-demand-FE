import React, { useState, useEffect } from "react";
import { Link,  useHistory  } from 'react-router-dom';
import { LoginForm } from "../../forms";
import {  useSelector, useDispatch } from 'react-redux';
import { submitFormLogics } from '../../actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { loggedIn} = useSelector(state => state.auth);
  const {waiting_for_confirmaion}= useSelector(state => state.notSavedAuth);
  const { emailConfirmed} = useSelector(state => state.notSavedAuth);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=>{
    console.log('waiting_for_confirmaion', waiting_for_confirmaion)
    waiting_for_confirmaion&&history.replace('/ConfirmPleasePage')
  }, [history, waiting_for_confirmaion])
  
  const handleSubmitForm = async (values) => {  
    try{
    const error = await dispatch(submitFormLogics(values,'login'))
    setErrorMessage(error) 
     
    } catch (err) {
      console.log(err);
    }
  };

  console.log('login',emailConfirmed,loggedIn )
  return (
    
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      {errorMessage === "need to change password" ? <div>click <Link to="/ChangePasswordPage">HERE</Link> to change password</div> : ""}
      
      <div style={{ margin: 20 }}></div>
     
      <div>not a member? click <Link to="/Registration">HERE</Link> to register</div>

    </div>
  );
};

export default Login;
