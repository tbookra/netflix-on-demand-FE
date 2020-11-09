import * as yup from "yup";

const searchSchema = yup.object({
  searchString: yup
    .string().max(25,"searching over 25 charecters is not aloud!")
    
    
 
});

export default searchSchema;