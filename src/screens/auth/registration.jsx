import React from "react";
import { RegistrationForm } from "../../forms";
const Registration = () => {
  const handleSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <RegistrationForm submitForm={handleSubmitForm} />
    </div>
  );
};

export default Registration;
