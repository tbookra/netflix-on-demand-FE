import React from "react";
import { RegistrationForm } from "../../forms";
import { httpRequest } from "../../api";
const Registration = () => {
  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const data = await httpRequest.post("/auth/register", values);
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
