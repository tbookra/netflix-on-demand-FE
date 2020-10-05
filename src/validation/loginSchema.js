import * as yup from "yup";
import errorMessages from "./errorMessages";

const loginSchema = yup.object({
  email: yup
    .string()
    .required(errorMessages("Email"))
    .email(errorMessages("Email", "Invalid")),
  password: yup.string().required(errorMessages("Password")).min(5).max(24),
});

export default loginSchema;
