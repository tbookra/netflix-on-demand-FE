import React from "react";
import { Formik } from "formik";
import Input from "../components/Input";
import { searchSchema } from "../validation";
import PropTypes from "prop-types";


const SearchForm = (props) => {
  return (
    <Formik
      initialValues={{
        searchString: "",
      }}
      onSubmit={async (values) => {
        props.setString(values);
      }}
      validationSchema={searchSchema}
    >
      {(props) => (
        <div>
          <Input
            name="searchString"
            type="text"
            label="Search"
            placeholder="SEARCH HERE..."
            value={props.values.searchString}
            errors={props.touched.searchString && props.errors.searchString}
            handleChange={(e) => {
              props.handleChange(e);
              setTimeout(() => {
                props.submitForm();
              });
            }}
          />
        </div>
      )}
    </Formik>
  );
};

SearchForm.propTypes = { 
  setString: PropTypes.func,
};

export default SearchForm;
