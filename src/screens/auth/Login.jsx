import React, { useState } from "react";
import { Link, useHistory  } from 'react-router-dom';
import { LoginForm } from "../../forms";
import { httpRequest } from "../../api";
import * as tokenHandler from '../../api/tokenHandler';
import { useDispatch, useSelector } from 'react-redux';

import {setLogged} from '../../actions/authActions';


const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.loggedIn)
  const history = useHistory();

  const indexReq = async () => {
    try {
      const data = await httpRequest.get("/");
      console.log('data11',data);
    } catch (err) {
      console.log("catch");
      console.log(err);
    }
  };
  const handleSubmitForm = async (values) => {
    console.log('values:',values);
    try {
      const { data } = await httpRequest.post("/auth/login", values);
      console.log('new data:', data);
      if (data.error) return setErrorMessage(data.error);
      if (data.token) {
        tokenHandler.setToken(data.token);
      const user = await httpRequest.post("/getuser", values);
      
     
        dispatch(setLogged(user.data.user.full_name));
        console.log('login state', logged);
        history.push("/");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('after login: ',logged);
  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      
      <div style={{ margin: 20 }}></div>
      <button onClick={indexReq}>Index</button>
      <div>not a member? click <Link to="/Registration">HERE</Link> to register</div>
    </div>
  );
};

export default Login;
