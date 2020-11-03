import React, {useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {MovieItemData} from '../../components'
import {CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
const MovieItem = () =>{
    const {currentMovie,movieFetchingError} = useSelector(state=>state.mainApp)
    const [isAccessible, setIsAccessible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [rernder, setRerender] = useState('')

    useEffect(()=>{
       if(!currentMovie || !Object.keys(currentMovie).length){
           return setRerender('render please')
          }
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
          !movieFetchingError
          ?
            <CircularProgress />
          :
        <h3>{movieFetchingError}</h3>
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