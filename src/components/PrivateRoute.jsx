import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { getToken } from "../api/tokenHandler";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ Component, ...rest }) => {
  const history = useHistory();
  const token = getToken();
  const { changePassword } = useSelector((state) => state.auth);

  useEffect(() => {
    !token && history.replace("/login");
  }, [token, history]);

  return !changePassword ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/ChangePasswordPage" />
  );
  // return !changePassword ? (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       token ? <Component {...props} /> : <Redirect to="/Login" />
  //     }
  //   />
  // ) : (
  //   <Redirect to="/ChangePasswordPage" />
  // );
};

PrivateRoute.propTypes = {
  Component: PropTypes.func,
};

export default PrivateRoute;
