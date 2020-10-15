import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LoginForm } from "../../forms";
import { httpRequest } from "../../api";
import * as tokenHandler from '../../api/tokenHandler'
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
 

  const indexReq = async () => {
    try {
      const data = await httpRequest.get("/");
      console.log(data);
    } catch (err) {
      console.log("catch");
      console.log(err);
    }
  };
  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const { data } = await httpRequest.post("/auth/login", values);
      if (data.error) return setErrorMessage(data.error);
      if (data.token) tokenHandler.setToken(data.token)
      console.log(data);
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
      <button onClick={indexReq}>Index</button>
      <div>not a member? click <Link to="/registration">HERE</Link> to register</div>
    </div>
  );
};

export default Login;
