import React from "react";
import { Button } from "@material-ui/core";
import { Input } from "../components";
import { Formik } from "formik";
import { registrationSchema } from "../validation";
const PasswordChange = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
         
          old_password: "",
          new_password: "",
          
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <div>
            
            <Input
              name="old_password"
              type="password"
              label="old Password"
              placeholder="OLD PASSWORD"
              value={props.values.old_password}
              handleChange={props.handleChange("old_password")}
              handleBlur={props.handleBlur("old_password")}
              errors={props.touched.old_password && props.errors.old_password}
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
              Registration
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PasswordChange;
