import React, { useState } from "react";
import { RegistrationForm } from "../../forms";
import { httpRequest } from "../../api";
import * as tokenHandler from "../../api/tokenHandler";
const Registration = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitForm = async (values) => {
    console.log(values);
    try {
      const { data } = await httpRequest.post("/auth/register", values);
      if (data.error) return setErrorMessage(data.error);
      if (data.token) tokenHandler.setToken(data.token);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <RegistrationForm submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
    </div>
  );
};

export default Registration;
