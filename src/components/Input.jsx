import React from "react";
import { TextField } from "@material-ui/core";
const Input = (props) => {
  return (
    <div>
      <TextField
        variant="standard"
        name={props.name}
        type={props.type}
        value={props.value}
        label={props.label}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
      {props.errors && <p style={{ color: "red" }}>{props.errors}</p>}
    </div>
  );
};

export default Input;
