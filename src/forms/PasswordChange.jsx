import React from "react";
import { Button } from "@material-ui/core";
import { Input } from "../components";
import { Formik } from "formik";
import { Container} from '@material-ui/core';

import { newPasswordSchema } from "../validation";
const PasswordChange = (props) => {
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          new_password: "",
        }}
        validationSchema={newPasswordSchema}
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
              name="new_password"
              type="password"
              label="New Password"
              value={props.values.new_password}
              handleChange={props.handleChange("new_password")}
              handleBlur={props.handleBlur("new_password")}
              errors={props.touched.new_password && props.errors.new_password}
            />

            <Button
              variant="outlined"
              onClick={props.handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
            >
              Submit
            </Button>
          </Container>
        )}
      </Formik>
    </Container>
  );
};

export default PasswordChange;
