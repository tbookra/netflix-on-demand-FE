import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
    <div>
      <h1>Thank you for confirming!</h1>
      <h2>Wellcome abord! hope you enjoy our site.</h2>
      <h2>Now you can start expoloring our owesome video collection</h2>
    </div>
  );
};

export default ConfirmationAccepted;
