import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Typography, Container } from "@material-ui/core";
import { httpRequest } from "../../api";

const ConfirmPleasePage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [rememberMe, setRememberMe] = useState("false");
  const { emailConfirmed } = useSelector((state) => state.notSavedAuth);
  const history = useHistory();

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
    setRememberMe(localStorage.getItem("rememberMe"));
    localStorage.removeItem("email");
    localStorage.removeItem("rememberMe");
    emailConfirmed && history.replace("/");
  }, [history, emailConfirmed]);

  const handleResend = async () => {
    await httpRequest.post("/auth/resend", { userEmail, rememberMe });
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>Please confirm your Email account at {userEmail}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        if you haven't recieved an Email from us, please check if the Email
        above is correct{" "}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        to resend the email please press{" "}
        <Button onClick={handleResend}>HERE</Button>
      </Typography>
    </Container>
  );
};

export default ConfirmPleasePage;
