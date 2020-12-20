import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {Typography, Container} from '@material-ui/core';

import { LoginForm } from "../../forms";
import { useSelector, useDispatch } from "react-redux";
import { submitFormLogics } from "../../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggedIn } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loggedIn && history.replace("/");
  }, [history, loggedIn]);

  const handleSubmitForm = async (values) => {
    try {
      const error = await dispatch(submitFormLogics(values, "login"));
      setErrorMessage(error);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Typography variant='h3' gutterBottom>Login</Typography>
      <LoginForm submitForm={handleSubmitForm} />
      {errorMessage && <Typography variant='h4' style={{ color: "red" }}>{errorMessage}</Typography>}
      {errorMessage === "need to change password" ? (
        <Container>
          click <Link to="/ChangePasswordPage">HERE</Link> to change password
        </Container>
      ) : (
        ""
      )}

      <Container style={{ margin: 20 }}></Container>

      <Container>
        not a member? click <Link to="/Registration">HERE</Link> to register
      </Container>
    </Container>
  );
};

export default Login;
