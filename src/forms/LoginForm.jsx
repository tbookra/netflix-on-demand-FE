import React from "react";
import { Button, Checkbox, Container } from "@material-ui/core";
import { Input } from "../components";
import { Formik } from "formik";
import { loginSchema } from "../validation";
import PropTypes from "prop-types";

const LoginForm = (props) => {
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <Container>
            <Input
              name="email"
              type="text"
              label="Email"
              placeholder="Email@mail.com"
              value={props.values.email}
              handleChange={props.handleChange("email")}
              handleBlur={props.handleBlur("email")}
              errors={props.touched.email && props.errors.email}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="PASSWORD"
              value={props.values.password}
              handleChange={props.handleChange("password")}
              handleBlur={props.handleBlur("password")}
              errors={props.touched.password && props.errors.password}
            />
            <Checkbox
              name="rememberMe"
              label="Remember Me"
              checked={props.values.rememberMe}
              onChange={props.handleChange("rememberMe")}
            />

            <Button
              variant="outlined"
              onClick={props.handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
            >
              Login
            </Button>
          </Container>
        )}
      </Formik>
    </Container>
  );
};

LoginForm.propTypes = { 
  submitForm: PropTypes.func,
};

export default LoginForm;
