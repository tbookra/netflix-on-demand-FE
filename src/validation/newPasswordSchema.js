import * as yup from "yup";
import errorMessages from "./errorMessages";

const newPasswordSchema = yup.object({
  email: yup
    .string()
    .required(errorMessages("Email"))
    .email(errorMessages("Email", "Invalid")),
  old_password: yup.string().required(errorMessages("old_password")).min(5).max(24),
  new_password: yup.string().required(errorMessages("new_Password")).min(5).max(24),
 
});

export default newPasswordSchema;
