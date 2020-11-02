import React, {useState,useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {MovieItemData} from '../../components'
import {CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
const MovieItem = () =>{
    const {currentMovie} = useSelector(state=>state.mainApp)
    const [isAccessible, setIsAccessible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
      (async()=>{
        try{
          const {data:{isMovieAccessible}} = await httpRequest.get(`/movie/checkIfMovieAccessible/${currentMovie.id}`)
          setIsAccessible(isMovieAccessible)
          setIsLoading(false)
        }catch(err){
          console.log(err)
        }
      })()
    },[currentMovie])

    if(isLoading){
        return(
            <CircularProgress />
        )
    }

    return (
      isAccessible 
      ?
        <div>
            <MovieItemData/>
        </div>
      :
        <Redirect to={`/purchasePage/${currentMovie.id}`}/>      
    )
};

export default MovieItem;