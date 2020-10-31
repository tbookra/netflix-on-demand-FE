import React, {useState,useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {MovieItemData} from '../../components'
import {CircularProgress} from '@material-ui/core'
const MovieItem = () =>{
    const {state={}} = useLocation()
    console.log('movie Item', state)
    const [userMoviesData, setUserMoviesData] = useState({
    isMember:false,
    purchasedMovies:[]
    })
    const [isLoading, setIsLoading] = useState(true)
    const [isAccessible, setIsAccessible] = useState(false)

  useEffect(()=>{
    (async()=>{
        console.log('effect 1')
        setIsLoading(true)
      try{
        const {data:{isMember, purchasedMovies}} = await httpRequest.get('/movie/getAccessibleMovies')
        setUserMoviesData(oldState=>({...oldState, isMember,purchasedMovies }))
      }catch(err){
        console.log(err)
      }
    })()
  },[])

  useEffect(()=>{
    console.log('effect 2')
    if(!state || !state.movieData) return setIsLoading(false)
      let isMoviePurchased = userMoviesData.purchasedMovies.filter(purchasedMovie=>purchasedMovie.movieId == state.movieData.id)
      console.log('isMoviePurchased',isMoviePurchased)
    if(userMoviesData.isMember || isMoviePurchased.length > 0){
        setIsAccessible(true)
    }else{
        setIsAccessible(false) 
    }
    setIsLoading(false)
  },[userMoviesData, state ])

if(isLoading){
    return(
        <CircularProgress />
    )
}

if(!isAccessible ){
    console.log('inside return', state.movieData)
    return(
           <Redirect to={{
            pathname: `/purchasePage/${state.movieData.id || ''}`,
            state: {movieData:state.movieData}
        }}
        />
    )
}

    return (
        <div>
            <MovieItemData movieData={state.movieData}/>
        </div>
    )
};

export default MovieItem;