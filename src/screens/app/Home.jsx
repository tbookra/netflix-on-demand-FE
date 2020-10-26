import React from "react";
import {moviesUrls} from '../../config/movies-config'
import {MoviesRow} from '../../components'
const Home = () => {
  const url = moviesUrls(1)
  return (
    <div>
      <h1>home</h1>
      {url.map((movie, index)=>{ 
        return(
          <MoviesRow key={index} rowTitle={movie.category} rowUrl={movie.fetchUrl}/>
        )
      })}
    </div>
  );
};


export default Home;

