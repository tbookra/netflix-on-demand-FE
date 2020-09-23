import * as yup from "yup";
import errorMessages from "./errorMessages";
const emailRegExp = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const loginSchema = yup.object({
  email: yup
    .string()
    .required(errorMessages("Email"))
    .matches(emailRegExp, errorMessages("Email", "Invalid")),
  password: yup.string().required(errorMessages("Password")).min(8).max(24),
});

export default loginSchema;
