import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Typography, Container} from '@material-ui/core';

import { httpRequest } from "../../api";
import { setToken } from "../../api/tokenHandler";
import { setUserData } from "../../actions/authActions";
import * as authTypes from "../../actions/authTypes";

const ConfirmationAccepted = () => {
  const { userEmail, rememberMe } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await httpRequest.get(
          `/auth/confirmed/${userEmail}/${rememberMe}`
        );
        dispatch({ type: authTypes.FETCH_SUCCESS });
        dispatch(setUserData(data.userObj));
        setToken(data.token);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userEmail, rememberMe, dispatch]);

  return (
    <Container>
      <Typography variant='h3' gutterBottom>Thank you for confirming!</Typography>
      <Typography  variant='h4'>Wellcome abord! hope you enjoy our site.</Typography>
      <Typography  variant='h4'>Now you can start exploring our awesome video collection</Typography>
    </Container>
  );
};

export default ConfirmationAccepted;
