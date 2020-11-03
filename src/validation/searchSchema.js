import * as yup from "yup";
import errorMessages from "./errorMessages";

const searchSchema = yup.object({
  search: yup
    .string().max(35,"searching over 35 charecters is not aloud!")
    
    
 
});

export default searchSchema;