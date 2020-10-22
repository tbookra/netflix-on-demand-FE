import React from "react";
import { Link,  Redirect  } from 'react-router-dom';
import { LoginForm } from "../../forms";
import {  useSelector, useDispatch } from 'react-redux';
import { submitFormLogics } from '../../actions/authActions'

const Login = () => {
  const dispatch = useDispatch();
  const {errorMessage, loggedIn} = useSelector(state => state.auth);
  // const logged = useSelector(state => state.auth.loggedIn);

  
  const handleSubmitForm = async (values) => {
    try{
    await dispatch(submitFormLogics(values,'login'));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      
      <div style={{ margin: 20 }}></div>
     
      <div>not a member? click <Link to="/Registration">HERE</Link> to register</div>
      {loggedIn ? <Redirect to='/' /> : <Redirect to='/Login' /> }
    </div>
  );
};

export default Login;
