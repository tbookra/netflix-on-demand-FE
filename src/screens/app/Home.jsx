
import React from "react";
import {moviesUrls} from '../../config/movies-config'
import {MoviesRow} from '../../components'
import Container from '@material-ui/core/Container';
const Home = () => {
  const moviesConfig = moviesUrls(1)

  return (
    <div>
      <Container maxWidth="lg">
        {moviesConfig.map((movie, index)=>{ 
          return(
            <MoviesRow key={index} rowTitle={movie.category} rowUrl={movie.fetchUrl}/>
          )
        })}
      </Container>
    </div>
  );
};


export default Home;

