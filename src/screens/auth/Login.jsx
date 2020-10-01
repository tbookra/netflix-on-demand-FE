import React from "react";
import { LoginForm } from "../../forms";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

const Login = () => {
  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const data = await api.post("/auth/login", values);
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
