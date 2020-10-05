import React from "react";
import { LoginForm } from "../../forms";
import { httpRequest } from "../../api";

const Login = () => {
  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const data = await httpRequest.post("/auth/login", values);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
    </div>
  );
};

export default Login;
