import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { PasswordChange } from "../../forms";
import { submitFormLogics } from "../../actions/authActions";
import { setChangePassword } from "../../actions/changePasswordAction";

const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggedIn } = useSelector((state) => state.auth);
  const { changePassword } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loggedIn && !changePassword && history.replace("/");
  }, [history, loggedIn, changePassword]);

  const handleSubmitForm = async (values) => {
    try {
      const error = await dispatch(submitFormLogics(values, "newPassword"));
      setErrorMessage(error);
      await dispatch(setChangePassword(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Choose new password</h1>
      <PasswordChange submitForm={handleSubmitForm} />
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
    </div>
  );
};

export default ChangePasswordPage;
