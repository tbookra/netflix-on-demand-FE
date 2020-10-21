import React from "react";
import { Link, useHistory  } from 'react-router-dom';
import { LoginForm } from "../../forms";
import {  useSelector, useDispatch } from 'react-redux';
import { submitFormLogics } from '../../actions/authActions'

const Login = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const history = useHistory();

  
  const handleSubmitForm = async (values) => {
    try{
    await dispatch(submitFormLogics(values,'login'));
    history.push('/');
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
    </div>
  );
};

export default Login;
