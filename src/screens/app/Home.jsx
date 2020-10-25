import React, {useState, useEffect} from "react";
import {moviesUrls} from '../../config/movies-config'
import {httpRequest} from '../../api'
import {MoviesRow} from '../../components'
const Home = () => {
const [userMoviesData, setUserMoviesData] = useState({
  isMember:false,
  purchasedMovies:[]
})
    console.log(userMoviesData)
  useEffect(()=>{
    (async()=>{
      try{
        console.log('useEffect try')
        const {data} = await httpRequest.get('/movie/getAccessibleMovies')
        console.log(data)
        // setUserMoviesData(oldState=>({...oldState, isMember,purchasedMovies }))
    
      }catch(err){
        console.log('useEffect catch')
        console.log(err)
      }
    })()
  },[])
  return (
    <div>
      <h1>home</h1>
      {moviesUrls.map((movie, index)=>{
        return(
          <MoviesRow key={index} rowTitle={movie.category} rowUrl={movie.fetchUrl}/>
        )
      })}
    </div>
  );
};


export default Home;

