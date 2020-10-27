import React from "react";
import Container from '@material-ui/core/Container';
import {moviesUrls} from '../../config/movies-config'
import {MoviesRow} from '../../components'
const Home = () => {
  const url = moviesUrls(1)
  return (
    <div>
      <Container maxWidth="lg">
      <h1>home</h1>
      {url.map((movie, index)=>{ 
        return(
          <MoviesRow key={index} rowTitle={movie.category} rowUrl={movie.fetchUrl}/>
        )
      })}
      </Container>
    </div>
  );
};


export default Home;

