import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import { Input } from "../components";
import { Formik } from "formik";
import { registrationSchema } from "../validation";
const LoginForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          full_name:"",
          rememberMe: false,
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <div>
            <Input
              name="email"
              type="text"
              label="Email"
              value={props.values.email}
              handleChange={props.handleChange("email")}
              handleBlur={props.handleBlur("email")}
              errors={props.touched.email && props.errors.email}
            />
            <Input
              name="password"
              type="text"
              label="Password"
              value={props.values.password}
              handleChange={props.handleChange("password")}
              handleBlur={props.handleBlur("password")}
              errors={props.touched.password && props.errors.password}
            />
            <Input
              name="full_name"
              type="text"
              label="Full Name"
              value={props.values.full_name}
              handleChange={props.handleChange("full_name")}
              handleBlur={props.handleBlur("full_name")}
              errors={props.touched.full_name && props.errors.full_name}
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
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
