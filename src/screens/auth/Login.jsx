import React from "react";
import { LoginForm } from "../../forms";
const Login = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitForm={handleSubmitForm} />
    </div>
  );
};

export default Login;
