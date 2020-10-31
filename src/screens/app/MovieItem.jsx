import React, {useState,useEffect} from 'react';
import {useParams,useHistory, Redirect} from 'react-router-dom'
import {tmdb, httpRequest} from '../../api'
import {getMovie} from '../../config/movies-config'
import {MovieItemData} from '../../components'
const MovieItem = () =>{
    const {movieId} = useParams();
    const [movieData, setMovieData] = useState({})
    const [movieErr, setMovieErr] = useState(false)
    const history = useHistory()
    useEffect(()=>{    
    ( async() => {
    try{
        const {data} = await tmdb.get(getMovie(movieId))
        setMovieData(data)
        setMovieErr(false)
        console.log(data)
    }catch(err){
        setMovieErr(true)
    }
})();  
    },[movieId])
    return (
        movieErr? <Redirect to='/*'/>:
        <div>
            <MovieItemData movieData={movieData}/>
        </div>
    )
};

export default MovieItem;