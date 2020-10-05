import React, { useState } from "react";
import { LoginForm } from "../../forms";
import { httpRequest } from "../../api";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const { data } = await httpRequest.post("/auth/login", values);
      if (data.error) return setErrorMessage(data.error);
      if (data.token) localStorage.setItem("token", data.token);
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
    </div>
  );
};

export default Login;
