import React from 'react';
import { Formik } from "formik";
import {searchSchema} from '../validation';
import {getSearchMovies} from '../config/movies-config';
import tmdb from '../api/tmdb'
import Input from '../components/Input';

 const SearchForm = (props) => {

  return (
        <Formik
        initialValues={{
          searchString: "", 
        }}
        onSubmit={ async (values)=>{
          // console.log('values',values.searchString)
          const url = getSearchMovies(values.searchString);
          // console.log('url',url)
          const {data:{results}} = await tmdb.get(url);
          console.log(results)
        }}
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