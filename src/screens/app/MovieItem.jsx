import React, {useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {MovieItemData} from '../../components'
import {CircularProgress} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux';
import {setChangePassword} from '../../actions/changePasswordAction'

const MovieItem = () =>{
    const dispatch = useDispatch();
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
          // console.log('isMovieAccessible',isMovieAccessible, changePassword)
          // setTimeout(()=>{
            // if(isMovieAccessible === "change password") {
            //   setChangePassword(true);
            // }
          // })
          console.log('isMovieAccessible',isMovieAccessible)
          if(isMovieAccessible === "password") await dispatch(setChangePassword(true))
          setIsAccessible(isMovieAccessible)
          setIsLoading(false)
        }catch(err){
          console.log(err)
        }
      })()
    },[currentMovie,isAccessible,dispatch])
    
    // (async()=>{
    //   try{
    //      if(isAccessible === "password") await dispatch(setChangePassword(true))
    //     }catch(err){
    //       console.log(err)
    //     }
    //   })();

    // if(changePassword) {
    //   return(
    //     <Redirect to='/ChangePasswordPage'  />
    //   )
    // }
    
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
      // changePassword ? <Redirect to='/ChangePasswordPage'  /> :
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