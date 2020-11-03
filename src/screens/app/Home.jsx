
import React, {useEffect} from "react";
import {moviesUrls} from '../../config/movies-config'
import {MoviesRow} from '../../components'
import Container from '@material-ui/core/Container';
import {useDispatch} from 'react-redux'
import * as appTypes from '../../actions/appTypes'

const Home = () => {
  const dispatch = useDispatch()
  const moviesConfig = moviesUrls(1)
  useEffect(()=>{
    dispatch({type:appTypes.CLEAN_STATE})
  },[dispatch])
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

