import * as yup from "yup";
import errorMessages from "./errorMessages";

const registrationSchema = yup.object({
  email: yup
    .string()
    .required(errorMessages("Email"))
    .email(errorMessages("Email", "Invalid")),
  password: yup.string().required(errorMessages("Password")).min(5).max(24),
  full_name: yup
    .string()
    .required(errorMessages("Full Name"))
    .min(3, "Your full name must contain at least 3 charecters")
    .max(40, "Your full name cannot contain more than 40 charecters"),
});

export default registrationSchema;
