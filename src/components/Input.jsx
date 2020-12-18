import React from "react";
import { TextField, Container } from "@material-ui/core";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <Container>
      <TextField
        variant="outlined"
        color="primary"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        label={props.label}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      {props.errors && <p style={{ color: "red" }}>{props.errors}</p>}
    </Container>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.string,
};

export default Input;
