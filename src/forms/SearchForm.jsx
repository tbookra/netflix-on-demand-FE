import React from 'react';
import { Formik } from "formik";
import {searchSchema} from '../validation';
import Input from '../components/Input';





 const SearchForm = (props) => {
 

  return (
    
        <Formik
        initialValues={{
          search: "",
         
        }}
        
        // validationSchema={searchSchema}
      >
        {(props) => (
          <div >
            <Input
              name="search"
              type="text"
              label="Search"
              placeholder="SEARCH HERE..."
              value={props.values.search}
              handleChange={props.handleChange("search")}
              handleBlur={props.handleBlur("search")}
              onChange ={props.handleSubmit}
            />
            

            
          </div>
        )}
      </Formik>
       
       
    
    
   
  );
};

export default SearchForm;