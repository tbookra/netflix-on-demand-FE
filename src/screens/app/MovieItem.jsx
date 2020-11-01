import React, {useState,useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {MovieItemData} from '../../components'
import {CircularProgress} from '@material-ui/core'
const MovieItem = () =>{
    const {state:{movieData}} = useLocation()
    const [isAccessible, setIsAccessible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
      (async()=>{
        try{
          const {data:{isMovieAccessible}} = await httpRequest.get(`/movie/checkIfMovieAccessible/${movieData.id}`)
          setIsAccessible(isMovieAccessible)
          setIsLoading(false)
        }catch(err){
          console.log(err)
        }
      })()
    },[movieData])

    if(isLoading){
        return(
            <CircularProgress />
        )
    }

    return (
      isAccessible 
      ?
        <div>
            <MovieItemData movieData={movieData} />
        </div>
      :
        <Redirect to={{
          pathname: `/purchasePage/${movieData.id}`,
          state: {movieData}
        }}/>
      
    )
};

export default MovieItem;