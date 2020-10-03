import React from "react";
import { RegistrationForm } from "../../forms";
import axios from "axios";
const Registration = () => {
  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/register",
        values
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <RegistrationForm submitForm={handleSubmitForm} />
    </div>
  );
};

export default Registration;
