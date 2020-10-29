
import React, {useState, useEffect} from "react";
import {moviesUrls} from '../../config/movies-config'
import {httpRequest} from '../../api'
import {MoviesRow} from '../../components'
import Container from '@material-ui/core/Container';
const Home = () => {
  const url = moviesUrls(1)
  const [userMoviesData, setUserMoviesData] = useState({
    isMember:false,
    purchasedMovies:[]
  })
    console.log(userMoviesData)
  useEffect(()=>{
    (async()=>{
      try{
        const {data:{isMember, purchasedMovies}} = await httpRequest.get('/movie/getAccessibleMovies')
        setUserMoviesData(oldState=>({...oldState, isMember,purchasedMovies }))
      }catch(err){
        console.log(err)
      }
    })()
  },[])

  return (
    <div>
      <Container maxWidth="lg">
      <h1>home</h1>
      {url.map((movie, index)=>{ 
        return(
          <MoviesRow key={index} rowTitle={movie.category} rowUrl={movie.fetchUrl} userMoviesData={userMoviesData}/>
        )
      })}
      </Container>
    </div>
  );
};


export default Home;

