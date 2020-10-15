import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {tmdb} from '../../api'
import * as moviesUrls from '../../config/moviesUrls'

const MovieItem = () =>{
    const {id} = useParams()
    useEffect(()=>{
        ( async() => {
    try{
        const {data} = await tmdb.get(moviesUrls.getMovie(id))
        console.log(data)
    }catch(err){
        console.log(err)
    }
})();
        
    },[id])
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
};

export default MovieItem;