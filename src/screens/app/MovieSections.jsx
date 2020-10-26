import React,{useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'

import MovieSection from '../../components/MovieSection';
import {moviesUrls} from '../../config/movies-config'


const MovieSections = () => {
    const {section} = useParams()

    // useEffect(()=>{
    //     console.log('moviesUrls',moviesUrls[0].fetchUrl)
    // })

    return(
        <div>
      <h1>{section}</h1>
     
      
          <MovieSection  sectionUrl={moviesUrls[0].fetchUrl}/>
    </div>
    )
};

export default MovieSections;