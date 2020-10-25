import React, {useState,useEffect} from 'react';
import {useParams,useHistory, Redirect} from 'react-router-dom'
import {tmdb, httpRequest} from '../../api'
import {getMovie} from '../../config/movies-config'

const MovieItem = () =>{
    const {movieId} = useParams();
    const [err, setErr] = useState(false)
    const history = useHistory()
    useEffect(()=>{    
    ( async() => {
    try{
        const {data:{isMovieAccessible}} = await httpRequest.get(`/movie/checkIfMovieAccessible/${movieId}`)
        console.log('movieData',isMovieAccessible)
        if(!isMovieAccessible) return history.replace(`/purchasePage/${movieId}`)
         setErr(false)
        const {data} = await tmdb.get(getMovie(movieId))
        console.log(data)
    }catch(err){
        setErr(true)
    }
})();  
    },[movieId, history])
    return (
        err? <Redirect to='/*'/>:
        <div>
            <h1>{movieId}</h1>
        </div>
    )
};

export default MovieItem;