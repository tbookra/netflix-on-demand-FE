import React from 'react'
import {useParams} from 'react-router-dom';
import {  useSelector } from 'react-redux';

import MovieSection from '../../components/MovieSection';
import {moviesUrls} from '../../config/movies-config';
import {sectionType} from '../../config/sectionTypes';



const MovieSections = () => {
    const {section} = useParams();
    const page = useSelector(state => state.page.popularPage);
    const url = moviesUrls(page);
   

    return(
        <div>
      <h1>{sectionType(section).sectionTitle}</h1>
     
      
          <MovieSection  sectionUrl={url[sectionType(section).urlArr].fetchUrl} section={section}/>
    </div>
    )
};

export default MovieSections;