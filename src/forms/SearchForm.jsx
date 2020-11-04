import React from 'react';
import { Formik } from "formik";
import {searchSchema} from '../validation';
import Input from '../components/Input';

 const SearchForm = (props) => {
  return (
        <Formik
        initialValues={{
          searchString: "", 
        }}
        onSubmit={(values)=>console.log(values)}
        // validationSchema={searchSchema}
      >
        {(props) => (
          <div >
            <Input
              name="searchString"
              type="text"
              label="Search"
              placeholder="SEARCH HERE..."
              value={props.values.searchString}
              handleChange={(e)=>{
                props.handleChange(e)
                setTimeout(()=>{
                  props.submitForm()
                })
              }}
    
            />
          </div>
        )}
      </Formik>
  );
};

export default SearchForm;