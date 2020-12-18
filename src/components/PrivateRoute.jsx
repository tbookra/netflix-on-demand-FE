import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../api/tokenHandler";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
 
  const token = getToken();
  const { changePassword } = useSelector((state) => state.auth);

  return !changePassword ? (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  ) : (
    <Redirect to="/ChangePasswordPage" />
  );
};

PrivateRoute.propTypes = { 
  Component: PropTypes.func,
};

export default PrivateRoute;
