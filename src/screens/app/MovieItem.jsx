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
        const {data} = await tmdb.get(getMovie(movieId))
        setErr(false)
        console.log(data)
    }catch(err){
        setErr(true)
    }
})();  
    },[movieId])
    return (
        err? <Redirect to='/*'/>:
        <div>
            <h1>{movieId}</h1>
        </div>
    )
};

export default MovieItem;