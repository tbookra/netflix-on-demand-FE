import React, {useState,useEffect} from 'react';
import {useParams,useHistory, Redirect} from 'react-router-dom'
import {tmdb, httpRequest} from '../../api'
import {getMovie} from '../../config/movies-config'

const MovieItem = () =>{
    const {id} = useParams()
    const [err, setErr] = useState(false)
    const history = useHistory()
    useEffect(()=>{    
    ( async() => {
    try{
        const {data:{isMovieAccessible}} = await httpRequest.get(`/movie/checkIfMovieAccessible/${id}`)
        console.log('movieData',isMovieAccessible)
        if(!isMovieAccessible) return history.push('/purchasePage')
         setErr(false)
        const {data} = await tmdb.get(getMovie(id))
        console.log(data)
    }catch(err){
        setErr(true)
    }
})();  
    },[id, history])
    return (
        err? <Redirect to='/*'/>:
        <div>
            <h1>{id}</h1>
        </div>
    )
};

export default MovieItem;